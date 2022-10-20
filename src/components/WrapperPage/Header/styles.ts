import styled from 'styled-components'

import Logo from './logo'

export const HeaderWrapper = styled.header`
  height: 8rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const HeaderIcon = styled(Logo)``

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  h1 {
    font-size: 3.6rem;
  }

  small {
    font-size: 1.2rem;
  }
`
