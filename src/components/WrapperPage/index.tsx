import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'
import * as S from './styles'

export interface WrapperPageProps {
  children: ReactNode
}

const WrapperPage = ({ children }: WrapperPageProps) => {
  return (
    <>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <Footer />
    </>
  )
}

export default WrapperPage
