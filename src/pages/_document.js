import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
