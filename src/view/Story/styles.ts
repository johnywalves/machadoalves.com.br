import styled, { css } from 'styled-components'

export const Content = styled.div`
  padding: 2rem calc(calc(100% - 98rem) / 2);
  background-color: var(--forehead-bg-color);
`

export const Title = styled.h2`
  color: var(--highlight-text);
  font-size: 6.4rem;
`

export const Subtitle = styled.small`
  color: var(--sub-text);
  font-size: 1.6rem;
`

export const Container = styled.div`
  margin: 2rem auto;
  width: 98rem;
  display: grid;
  grid-template-columns: 66rem 30rem;
  column-gap: 2rem;
`

export const Story = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3.2rem;
  margin-bottom: 2rem;

  & p {
    color: var(--normal-text);
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: justify;
  }
`

export const Detail = styled.div`
  border: 1px solid var(--border-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: fit-content;
  margin-top: 2.6rem;
  padding: 0 1.6rem 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    text-align: center;
  }
`

type IconProps = {
  profile?: string
}

const profileIcon = (profile: string) =>
  css`
    background-image: url('${profile}');
  `

export const DetailIcon = styled.div`
  height: 5.2rem;
  width: 5.2rem;
  margin-bottom: -2.6rem;
  ${({ profile }: IconProps) => profile && profileIcon(profile)}
  background-color: var(--icon-bg-color);
  background-size: cover;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;
`

export const DetailAuthorName = styled.p`
  color: var(--sub-text);
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.8rem 0;
  cursor: pointer;
`

export const DetailTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.8rem 0;
`

export const DetailPublished = styled.p`
  color: var(--sub-text);
  font-size: 1.2rem;
`

export const DetailEdited = styled.p`
  color: var(--sub-text);
  font-size: 1.2rem;
`

export const DetailScoreLabel = styled.p`
  font-size: 1.6rem;
  margin: 0.8rem 0 0.4rem;
`

export const DetailScore = styled.p`
  color: var(--sub-text);
  font-size: 1.8rem;

  & strong {
    color: var(--highlight-text);
  }
`
