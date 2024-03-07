import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  height: 8rem;
  width: 100%;
  background-color: var(--forehead-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;

  span {
    color: var(--color-danger);
    margin: 0 0.5rem;
  }

  a {
    margin-left: 0.5rem;
  }
`
