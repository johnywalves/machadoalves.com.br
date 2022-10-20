import Search from 'components/Search'
import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'

import stories from 'types/stories'

import Reading from './reading'
import { MainForehead, MainContent, MainContainer, MainStories } from './styles'

type MainProps = {
  highlights: Array<stories>
}

const Main = ({ highlights }: MainProps) => (
  <WrapperPage>
    <MainForehead>
      <MainContent>
        <Reading />
        <div>
          <h2>Compartilhando o amor pela leitura</h2>
          <p>
            Coleção de histórias curtas de vários escritores para ler e
            compartilhar
          </p>
        </div>
      </MainContent>
    </MainForehead>

    <MainContainer>
      <MainStories>
        {highlights &&
          highlights.map((props, index) => (
            <Summary key={index} showAuthor={true} {...props} />
          ))}
      </MainStories>
      <Search></Search>
    </MainContainer>
  </WrapperPage>
)

export default Main
