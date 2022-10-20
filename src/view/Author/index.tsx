import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'

import stories from 'types/stories'

import {
  AuthorForehead,
  AuthorIcon,
  AuthorContent,
  AuthorName,
  AuthorDescription,
  AuthorStories
} from './styles'

export type AuthorProps = {
  name: string
  content: string
  profile: string
  posts: Array<stories>
}

const Author = ({ name, content, profile, posts }: AuthorProps) => (
  <WrapperPage>
    <AuthorForehead>
      <AuthorIcon profile={profile} />
    </AuthorForehead>
    <AuthorContent>
      <AuthorName>{name}</AuthorName>
      <AuthorDescription dangerouslySetInnerHTML={{ __html: content }} />
      <AuthorStories>
        {posts &&
          posts
            .filter(({ slug, title }) => slug && title)
            .map((props, index) => <Summary key={index} {...props} />)}
      </AuthorStories>
    </AuthorContent>
  </WrapperPage>
)

export default Author
