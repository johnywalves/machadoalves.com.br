import { markdownToHtml, getAllPosts, getPostBySlug } from 'functions/posts'
import stories from 'types/stories'
import Story from 'view/Story'

type StoryPageProps = {
  post: stories
}

export default function StoryPage({ post }: StoryPageProps) {
  return <Story {...post} />
}

type staticPropsProps = {
  params: {
    author: string
    slug: string
  }
}

export async function getStaticProps({ params }: staticPropsProps) {
  const post = getPostBySlug(`${params.author}-${params.slug}`, [
    'slug',
    'title',
    'author',
    'summary',
    'content',
    'published',
    'modified'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'author'])

  return {
    paths: posts.map((post) => ({
      params: {
        author: post.author.slug,
        slug: post.slug
      }
    })),
    fallback: false
  }
}
