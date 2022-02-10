import listAuthors from 'data/authors'
import { getAllPosts } from 'functions/posts'
import Author, { AuthorProps } from 'view/Author'

export default function AuthorPage({ name, description, posts }: AuthorProps) {
  return <Author name={name} description={description} posts={posts} />
}

type staticPropsProps = {
  params: {
    author: string
  }
}

export async function getStaticProps({ params }: staticPropsProps) {
  const posts = getAllPosts(['slug', 'title', 'author', 'summary'])
  const { name, description } = listAuthors.find(
    ({ slug }) => slug === params.author
  ) || { name: '', description: '' }

  return {
    props: {
      name,
      description,
      posts
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: listAuthors.map(({ slug }) => ({
      params: { author: slug }
    })),
    fallback: false
  }
}
