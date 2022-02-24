type stories = {
  slug: string
  title: string
  summary: string
  published: string
  modified: string
  author: {
    name: string
    slug: string
    profile: string
  }
  content?: string
}

export default stories
