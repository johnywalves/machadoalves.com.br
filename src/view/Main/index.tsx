import Search from 'components/Search'
import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'
import stories from 'types/stories'

import Reading from './reading'
import * as S from './styles'

type MainProps = {
  highlights: Array<stories>
}

const Main = ({ highlights }: MainProps) => (
  <WrapperPage>
    <S.Forehead>
      <S.Content>
        <Reading />
        <div>
          <h2>Compartilhando o amor pela leitura</h2>
          <p>
            Coleção de histórias curtas de vários escritores para ler e
            compartilhar
          </p>
        </div>
      </S.Content>
    </S.Forehead>

    <S.Container>
      <S.Stories>
        {highlights &&
          highlights.map((props, index) => (
            <Summary key={index} showAuthor={true} {...props} />
          ))}
      </S.Stories>
      <Search></Search>
    </S.Container>
  </WrapperPage>
)

export default Main
