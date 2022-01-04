import Summary from 'components/Summary'
import WrapperPage from 'components/WrapperPage'
import list from 'data/list'

import * as S from './styles'

const Story = () => (
  <WrapperPage>
    <S.Forehead>
      <S.Icon />
    </S.Forehead>
    <S.Content>
      <S.Name>Machado Alves</S.Name>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare
        ullamcorper fringilla. Sed vitae nisl eu nunc blandit efficitur. Proin
        malesuada, dolor vitae posuere dignissim, purus dui porttitor ipsum, sit
        amet tincidunt ex ipsum sed neque. Sed varius auctor vulputate. Donec
        non metus eros. Morbi tempor mollis faucibus. Aenean sed ornare ipsum.
        Duis tempus lorem a nisl vestibulum, nec accumsan diam luctus.
      </S.Description>
      <S.Stories>
        {list.map((props, index) => (
          <Summary key={index} {...props} />
        ))}
      </S.Stories>
    </S.Content>
  </WrapperPage>
)

export default Story
