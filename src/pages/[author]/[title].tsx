import markdownToHtml from 'functions/markdownToHtml'
import { getAllPosts, getPostBySlug } from 'functions/posts'
import Story from 'view/Story'

import stories from 'types/stories'

type StoryPageProps = {
  post: stories
}

export default function StoryPage({ post }: StoryPageProps) {
  return <Story {...post} />
}

type staticPropsProps = {
  params: {
    author: string
    title: string
  }
}

export async function getStaticProps({ params }: staticPropsProps) {
  const post = getPostBySlug(`${params.author}/${params.title}`, [
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
  return {
    paths: getAllPosts().map((post) => {
      return {
        params: {
          author: post.slug.split('/')[0],
          title: post.slug.split('/')[1]
        }
      }
    }),
    fallback: false
  }
}
