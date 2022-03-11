import styled from 'styled-components'

export const Forehead = styled.div`
  width: 100%;
  background-color: var(--forehead-bg-color);
  padding: 6rem 0;
`

export const Content = styled.div`
  width: 98rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & div {
    width: 46rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    & h2 {
      color: var(--highlight-text);
      font-size: 5.2rem;
      margin-bottom: 2rem;
    }

    & p {
      font-size: 2.4rem;
      font-weight: 300;
    }
  }
`

export const Container = styled.div`
  margin: 2rem auto;
  width: 98rem;
  display: grid;
  grid-template-columns: 66rem 30rem;
  column-gap: 2rem;
`

export const Stories = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3.2rem;
  margin-bottom: 2rem;
`
