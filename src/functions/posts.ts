import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import stories from 'types/stories'

import { getAllAuthors } from './authors'

const postsDirectory = join(process.cwd(), '_stories')

const optionsFormatDate: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}

export const getPostSlugs = () => {
  const list: Array<string> = [],
    authors = fs.readdirSync(postsDirectory)

  authors.forEach((author) => {
    const files = fs
      .readdirSync(`${postsDirectory}/${author}`)
      .filter((filter) => filter !== `${author}.md`)

    if (files.length > 0) {
      files.forEach((file) =>
        list.push(`${author}/${file.replace(/\.md$/, '')}`)
      )
    }
  })

  return list
}

export const getAllPosts = (fields: Array<string> = []) => {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      if (post1.published && post2.published) {
        return post1.published > post2.published ? -1 : 1
      }
      return 1
    })
}

export const getPostBySlug = (
  slug: string,
  fields: Array<string> = []
): stories => {
  const filePath = join(postsDirectory, `${slug}.md`),
    currentPath = slug.split('/'),
    fileContents = fs.readFileSync(filePath, 'utf8'),
    { data, content } = matter(fileContents),
    listAuthors = getAllAuthors(['name'])

  const story: stories = {
    slug: slug,
    title: '',
    summary: '',
    published: '',
    modified: '',
    author: {
      name: '',
      slug: '',
      profile: ''
    }
  }

  fields.forEach((field) => {
    if (field === 'content') {
      story.content = content
    } else if (field === 'author') {
      story.author = listAuthors.find(
        ({ slug }) => slug === currentPath[0]
      ) || { slug: '', name: '', profile: '' }
    } else if (field === 'summary' && data.summary) {
      story.summary = data.summary
    } else if (field === 'published' && data.published) {
      story.published = new Date(data.published).toLocaleDateString(
        'pt-BR',
        optionsFormatDate
      )
    } else if (field === 'modified' && data.modified) {
      story.modified = new Date(data.modified).toLocaleDateString(
        'pt-BR',
        optionsFormatDate
      )
    } else if (field === 'title' && data.title) {
      story.title = data.title
    }
  })

  return story
}
