import WrapperPage from 'components/WrapperPage'
import Link from 'next/link'

import * as S from './styles'

const Story = () => (
  <WrapperPage>
    <S.Content>
      <S.Title>Quisque elementum</S.Title>
      <S.Subtitle>
        Publicado <strong>01.01.2020</strong> e editado{' '}
        <strong>15.12.2020</strong>
      </S.Subtitle>
    </S.Content>
    <S.Container>
      <S.Story>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare
          ullamcorper fringilla. Sed vitae nisl eu nunc blandit efficitur. Proin
          malesuada, dolor vitae posuere dignissim, purus dui porttitor ipsum,
          sit amet tincidunt ex ipsum sed neque. Sed varius auctor vulputate.
          Donec non metus eros. Morbi tempor mollis faucibus. Aenean sed ornare
          ipsum. Duis tempus lorem a nisl vestibulum, nec accumsan diam luctus.
          Donec at volutpat mauris, eu dapibus enim. Aliquam vestibulum
          vulputate odio id hendrerit. Donec fermentum ultricies blandit. Nullam
          pharetra eu felis at pretium. Vivamus condimentum enim nec malesuada
          consequat. Suspendisse convallis diam quis orci efficitur, in pretium
          urna pulvinar. Proin aliquet odio eget volutpat rutrum.
        </p>
        <p>
          Donec at dignissim eros. Sed at risus ut augue vestibulum ullamcorper.
          Donec sagittis mauris justo, quis mollis risus consectetur placerat.
          Aenean ullamcorper blandit magna, nec ultrices libero vulputate quis.
          Integer a ultricies mauris, sodales pulvinar nisl. Proin eget tempor
          diam. Aliquam nec orci vitae ligula eleifend condimentum ut
          ullamcorper odio. Donec pharetra velit ac dictum vulputate.
          Pellentesque vulputate aliquam quam. Donec tincidunt turpis vitae
          cursus imperdiet. Donec neque felis, tristique nec augue sed, accumsan
          varius justo. Mauris sollicitudin gravida augue, non suscipit enim
          malesuada et. Fusce interdum purus ac nibh dignissim, at auctor tortor
          convallis.
        </p>
        <p>
          Nam vitae luctus felis, nec commodo massa. Fusce dapibus dolor vel mi
          maximus, elementum sollicitudin odio volutpat. In at commodo mi.
          Mauris mollis nisl vitae malesuada ultrices. Aenean tortor justo,
          placerat ut dictum vel, euismod at enim. Morbi dictum lacus ut erat
          vehicula laoreet. Donec venenatis blandit est bibendum pharetra.
        </p>
        <p>
          Fusce facilisis vel ex et eleifend. Pellentesque fermentum mauris id
          nisl ultrices viverra at at sem. In et erat vel est euismod bibendum
          ut nec metus. Vestibulum pretium, magna nec posuere mattis, elit nulla
          dapibus mi, in dignissim felis augue sit amet quam. Nunc efficitur
          bibendum ante vel eleifend. Sed vestibulum tortor vitae dui tristique
          sollicitudin. Praesent ac felis in elit molestie mollis.
        </p>
        <p>
          Vivamus fermentum magna id odio luctus fringilla. Curabitur cursus
          bibendum pellentesque. Donec suscipit justo eget nunc lobortis
          posuere. Nunc sapien risus, convallis nec lorem in, ultricies varius
          enim. Sed cursus luctus odio, sed facilisis massa vestibulum eget. Sed
          nunc ante, mollis ut efficitur non, mollis in est. Nulla volutpat
          rhoncus tortor porttitor gravida. Sed ac ultrices arcu. Maecenas vitae
          elit mollis tellus sollicitudin efficitur. Donec sollicitudin euismod
          fringilla. Integer tristique quam id metus blandit, consectetur
          imperdiet est ultrices. Nullam fringilla augue volutpat ipsum molestie
          fringilla. Aliquam pharetra sagittis massa quis tristique. Nam ligula
          ligula, fermentum id nisi vitae, varius varius augue.
        </p>
      </S.Story>
      <S.Detail>
        <Link href="/machado-alves" passHref>
          <S.DetailIcon />
        </Link>
        <Link href="/machado-alves" passHref>
          <S.DetailAuthorName>Machado Alves</S.DetailAuthorName>
        </Link>
        <S.DetailTitle>Quisque elementum</S.DetailTitle>
        <S.DetailPublished>
          Publicado <strong>01.01.2020</strong>
        </S.DetailPublished>
        <S.DetailEdited>
          Editado <strong>15.12.2020</strong>
        </S.DetailEdited>
        <S.DetailScoreLabel>Aprovação</S.DetailScoreLabel>
        <S.DetailScore>
          <strong>96%</strong> (356)
        </S.DetailScore>
      </S.Detail>
    </S.Container>
  </WrapperPage>
)

export default Story
