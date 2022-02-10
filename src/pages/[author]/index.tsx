import { getAllPosts } from 'functions/posts'
import stories from 'types/stories'
import Author from 'view/Author'

type AuthorPageProps = {
  posts: Array<stories>
}

export default function AuthorPage({ posts }: AuthorPageProps) {
  return <Author posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'author', 'summary'])

  return {
    props: {
      posts
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          author: 'machado_alves'
        }
      }
    ],
    fallback: false
  }
}
