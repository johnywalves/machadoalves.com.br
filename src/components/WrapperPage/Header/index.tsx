import Link from 'next/link'

import manifest from '../../../../public/manifest.json'
import { HeaderWrapper, HeaderIcon, HeaderTitle } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/" passHref>
        <HeaderIcon />
      </Link>
      <Link href="/" passHref>
        <HeaderTitle>
          <h1>{manifest.short_name}</h1>
          <small>{manifest.description}</small>
        </HeaderTitle>
      </Link>
    </HeaderWrapper>
  )
}

export default Header
