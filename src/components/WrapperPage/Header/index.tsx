import Link from 'next/link'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <S.Icon />
      </Link>
      <Link href="/" passHref>
        <S.Title>
          <h1>Machado Alves</h1>
          <small>
            Históricas curtas escritas por mim, amigos e domínio público
          </small>
        </S.Title>
      </Link>
    </S.Wrapper>
  )
}

export default Header
