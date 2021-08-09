import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://recolocate.pe/"/>
        <link rel="stylesheet" href="/libs/fontello-embedded.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}