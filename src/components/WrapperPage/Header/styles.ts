import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 8rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const Icon = styled.div`
  height: 5.2rem;
  width: 5.2rem;
  margin: 0 1.2rem;
  border-radius: 100%;
  background-color: var(--icon-bg-color);
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 3.6rem;
  }

  small {
    font-size: 1.2rem;
  }
`
