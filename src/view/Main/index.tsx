import Search from 'components/Search'
import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'
import list from 'data/list'

import Reading from './reading'
import * as S from './styles'

const Main = () => (
  <WrapperPage>
    <S.Forehead>
      <S.Content>
        <Reading />
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Nam vitae luctus felis, nec commodo massa. Fusce dapibus dolor vel
            mi maximus, elementum sollicitudin odio
          </p>
        </div>
      </S.Content>
    </S.Forehead>

    <S.Container>
      <S.Stories>
        {list.map((props, index) => (
          <Summary key={index} {...props} />
        ))}
      </S.Stories>
      <Search></Search>
    </S.Container>
  </WrapperPage>
)

export default Main
