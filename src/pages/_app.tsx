import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

const url = 'https://www.machadoalves.com.br',
  title = 'Machado Alves - Contos Literários',
  description = 'Históricas curtas escritas por mim, amigos e domínio público',
  thumbnail = `${url}/thumbnail.png`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:title" content={title} key="twtitle" />
        <meta
          name="twitter:description"
          content={description}
          key="twdescription"
        />
        <meta name="twitter:image:src" content={thumbnail} />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:image" content={thumbnail} key="ogimage" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
