import Document, { Html, Head, Main, NextScript } from 'next/document'

const Page = props => (
  <Html>
    <Head>
      <link rel='shortcut icon' href='/static/favicon.ico' />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Page
