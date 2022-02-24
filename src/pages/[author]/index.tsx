import listAuthors from 'data/authors'
import { getAllPosts } from 'functions/posts'
import Author, { AuthorProps } from 'view/Author'

export default function AuthorPage({
  name,
  description,
  profile,
  posts
}: AuthorProps) {
  return (
    <Author
      name={name}
      description={description}
      profile={profile}
      posts={posts}
    />
  )
}

type staticPropsProps = {
  params: {
    author: string
  }
}

export async function getStaticProps({ params }: staticPropsProps) {
  const posts = getAllPosts(['slug', 'title', 'author', 'summary']).filter(
    ({ author }) => author.slug === params.author
  )

  const { name, description, profile } = listAuthors.find(
    ({ slug }) => slug === params.author
  ) || { name: '', description: '' }

  return {
    props: {
      name,
      description,
      profile,
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
