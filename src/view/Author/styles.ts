import styled from 'styled-components'

export const Forehead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  margin-bottom: 4.9rem;
  background-color: var(--forehead-bg-color);
`

export const Icon = styled.div`
  height: 9.8rem;
  width: 9.8rem;
  background-color: var(--highlight-text);
  border-radius: 50%;
  transform: translateY(calc(50% + 2rem));
`

export const Content = styled.div`
  padding: 2rem calc(calc(100% - 98rem) / 2);
`

export const Name = styled.h2`
  text-align: center;
  font-size: 6.4rem;
  color: var(--highlight-text);
`

export const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
  text-align: center;
`

export const Stories = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3.2rem;
  margin: 2rem 0;
`
