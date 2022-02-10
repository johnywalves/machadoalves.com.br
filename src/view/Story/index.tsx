import WrapperPage from 'components/WrapperPage'
import Link from 'next/link'
import stories from 'types/stories'

import * as S from './styles'

const Story = ({ title, content, author, published, modified }: stories) => (
  <WrapperPage>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>
        Publicado <strong>{published}</strong> e editado{' '}
        <strong>{modified}</strong>
      </S.Subtitle>
    </S.Content>
    <S.Container>
      <S.Story dangerouslySetInnerHTML={{ __html: content || '' }} />
      {author && (
        <S.Detail>
          <Link href={author.slug} passHref>
            <S.DetailIcon />
          </Link>
          <Link href={author.slug} passHref>
            <S.DetailAuthorName>{author.name}</S.DetailAuthorName>
          </Link>
          <S.DetailTitle>{title}</S.DetailTitle>
          <S.DetailPublished>
            Publicado <strong>{published}</strong>
          </S.DetailPublished>
          <S.DetailEdited>
            Editado <strong>{modified}</strong>
          </S.DetailEdited>
          {/*<S.DetailScoreLabel>Aprovação</S.DetailScoreLabel>
        <S.DetailScore>
          <strong>96%</strong> (356)
        </S.DetailScore>*/}
        </S.Detail>
      )}
    </S.Container>
  </WrapperPage>
)

export default Story
