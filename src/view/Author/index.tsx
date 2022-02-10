import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'
import stories from 'types/stories'

import * as S from './styles'

export type AuthorProps = {
  name: string
  description: string
  posts: Array<stories>
}

const Author = ({ name, description, posts }: AuthorProps) => (
  <WrapperPage>
    <S.Forehead>
      <S.Icon />
    </S.Forehead>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Stories>
        {posts &&
          posts
            .filter(({ slug, title }) => slug && title)
            .map((props, index) => <Summary key={index} {...props} />)}
      </S.Stories>
    </S.Content>
  </WrapperPage>
)

export default Author
