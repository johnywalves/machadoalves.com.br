import styled, { css } from 'styled-components'

export const AuthorForehead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  margin-bottom: 4.9rem;
  background-color: var(--forehead-bg-color);
`

type IconProps = {
  profile?: string
}

const profileIcon = (profile: string) =>
  css`
    background-image: url('${profile}');
  `

export const AuthorIcon = styled.div`
  height: 9.8rem;
  width: 9.8rem;
  ${({ profile }: IconProps) => profile && profileIcon(profile)}
  background-color: var(--icon-bg-color);
  background-size: cover;
  border-radius: 50%;
  transform: translateY(calc(50% + 2rem));
`

export const AuthorContent = styled.div`
  padding: 2rem calc(calc(100% - 98rem) / 2);
`

export const AuthorName = styled.h2`
  text-align: center;
  font-size: 6.4rem;
  color: var(--color-primary);
`

export const AuthorDescription = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
  text-align: left;
`

export const AuthorStories = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3.2rem;
  margin: 3rem 0 4rem;
`
