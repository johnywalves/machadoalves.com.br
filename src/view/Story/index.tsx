import WrapperPage from 'components/WrapperPage'
import Link from 'next/link'

import stories from 'types/stories'

import {
  StoryContent,
  StoryTitle,
  StorySubtitle,
  StoryContainer,
  StoryStory,
  StoryDetail,
  StoryDetailIcon,
  StoryDetailAuthorName,
  StoryDetailTitle,
  StoryDetailPublished,
  StoryDetailEdited
} from './styles'

const Story = ({ title, content, author, published, modified }: stories) => (
  <WrapperPage>
    <StoryContent>
      <StoryTitle>{title}</StoryTitle>
      <StorySubtitle>
        Publicado <strong>{published}</strong> e editado{' '}
        <strong>{modified}</strong>
      </StorySubtitle>
    </StoryContent>
    <StoryContainer>
      <StoryStory dangerouslySetInnerHTML={{ __html: content || '' }} />
      {author && (
        <StoryDetail>
          <Link href={`/${author.slug}`} passHref>
            <StoryDetailIcon profile={author.profile} />
          </Link>
          <Link href={`/${author.slug}`} passHref>
            <StoryDetailAuthorName>{author.name}</StoryDetailAuthorName>
          </Link>
          <StoryDetailTitle>{title}</StoryDetailTitle>
          <StoryDetailPublished>
            Publicado <strong>{published}</strong>
          </StoryDetailPublished>
          <StoryDetailEdited>
            Editado <strong>{modified}</strong>
          </StoryDetailEdited>
          {/*<S.DetailScoreLabel>Aprovação</S.DetailScoreLabel>
        <S.DetailScore>
          <strong>96%</strong> (356)
        </S.DetailScore>*/}
        </StoryDetail>
      )}
    </StoryContainer>
  </WrapperPage>
)

export default Story
