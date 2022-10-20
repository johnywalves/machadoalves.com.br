import { getAuthorsBySlug, getAuthorsSlugs } from 'functions/authors'
import markdownToHtml from 'functions/markdownToHtml'
import { getAllPosts } from 'functions/posts'
import Author, { AuthorProps } from 'view/Author'

export default function AuthorPage({
  name,
  content,
  profile,
  posts
}: AuthorProps) {
  return (
    <Author name={name} content={content} profile={profile} posts={posts} />
  )
}

type staticPropsProps = {
  params: {
    author: string
  }
}

export async function getStaticProps({ params }: staticPropsProps) {
  const {
      name,
      content: markdown,
      profile
    } = getAuthorsBySlug(params.author, ['name', 'content']) || {
      name: '',
      markdown: ''
    },
    content = await markdownToHtml(markdown || ''),
    posts = getAllPosts([
      'slug',
      'title',
      'author',
      'summary',
      'published',
      'modified'
    ]).filter(({ author }) => author.slug === params.author)

  return {
    props: {
      name,
      content,
      profile,
      posts
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getAuthorsSlugs().map((slug) => ({
      params: { author: slug }
    })),
    fallback: false
  }
}
