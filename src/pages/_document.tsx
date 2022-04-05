import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocumento extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/kdn2tcq.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
