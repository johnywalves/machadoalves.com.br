import { getAllPosts } from 'functions/posts'
import stories from 'types/stories'
import Main from 'view/Main'

type HomeProps = {
  posts: Array<stories>
}

export default function Home({ posts }: HomeProps) {
  return <Main highlights={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'author', 'summary'])

  return {
    props: {
      posts
    }
  }
}
