import { getAllPosts } from 'functions/posts'
import Main from 'view/Main'

import stories from 'types/stories'

type HomeProps = {
  posts: Array<stories>
}

export default function Home({ posts }: HomeProps) {
  return <Main highlights={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'title',
    'author',
    'summary',
    'published',
    'modified'
  ])

  return {
    props: {
      posts
    }
  }
}
