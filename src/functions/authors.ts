import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import authors from 'types/authors'

const authorsDirectory = join(process.cwd(), '_stories')

export const getAuthorsSlugs = () => {
  const files = fs.readdirSync(authorsDirectory)
  return files.map((file) => file.replace(/\.md$/, ''))
}

export const getAllAuthors = (fields: Array<string> = []) => {
  return getAuthorsSlugs().map((slug) => getAuthorsBySlug(slug, fields))
}

export const getAuthorsBySlug = (
  slug: string,
  fields: Array<string> = []
): authors => {
  const fullPath = join(authorsDirectory, `${slug}/${slug}.md`),
    fileContents = fs.readFileSync(fullPath, 'utf8'),
    { data, content } = matter(fileContents)

  const author: authors = {
    slug,
    profile: `/profiles/${slug}.png`,
    name: ''
  }

  fields.forEach((field) => {
    if (field === 'content') {
      author.content = content
    } else if (field === 'name' && data.name) {
      author.name = data.name
    }
  })

  return author
}
