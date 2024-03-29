import styled, { css } from 'styled-components'

export const SummaryWrapper = styled.article`
  border: 1px solid var(--border-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1.6rem 2.6rem 0 1.6rem;
`

export const SummaryTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SummaryAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & p {
    color: var(--sub-text);
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }
`

type IconProps = {
  profile?: string
}

const profileIcon = (profile: string) =>
  css`
    background-image: url('${profile}');
  `

export const SummaryIcon = styled.div`
  height: 2.6rem;
  width: 2.6rem;
  ${({ profile }: IconProps) => profile && profileIcon(profile)}
  background-color: var(--icon-bg-color);
  background-size: cover;
  border-radius: 100%;
`

export const SummaryTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`

export const SummaryUpdates = styled.small`
  color: var(--sub-text);
  font-size: 1.2rem;
`

export const SummarySummary = styled.p`
  margin: 1.2rem 0;
  font-size: 1.6rem;
  text-align: justify;
`

export const SummaryKeepReading = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.6rem;
`
