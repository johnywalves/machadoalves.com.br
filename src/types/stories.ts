import authors from 'types/authors'

type stories = {
  slug: string
  title: string
  summary: string
  published: string
  modified: string
  author: authors
  content?: string
}

export default stories
