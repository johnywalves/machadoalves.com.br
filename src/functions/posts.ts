import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import stories from 'types/stories'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
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
  path: string,
  fields: Array<string> = []
): stories => {
  const realSlug = path.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const story: stories = {
    slug: '',
    title: '',
    summary: '',
    published: '',
    modified: '',
    author: {
      name: '',
      slug: ''
    }
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      const paths = realSlug.split('-')
      story.slug = paths[1]
    } else if (field === 'content') {
      story.content = content
    } else if (field === 'author') {
      story.author = {
        name: 'Machado Alves',
        slug: 'machado_alves'
      }
    } else if (field === 'summary') {
      story.summary =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dapibus nibh. Fusce a posuere turpis. Aliquam erat volutpat. Integer condimentum viverra arcu finibus viverra. Fusce imperdiet sed augue sed pulvinar...'
    } else if (field === 'published' && data.published) {
      story.published = data.published
    } else if (field === 'modified' && data.modified) {
      story.modified = data.modified
    } else if (field === 'title' && data.title) {
      story.title = data.title
    }
  })

  return story
}

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
