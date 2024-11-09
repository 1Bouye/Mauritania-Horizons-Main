import { Html, Head, Main, NextScript } from 'next/document'
import backgroundImage from './bg.jpg';

export default function Document() {
  const style = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: 'cover', // Makes the image cover the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Ensures the full height of the viewport
    margin: 0

  };

  return (
    <Html lang="en" className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20">
      <Head>
        <title>Mauritania horizons</title>
        <link rel="icon" href="/images/artwork/06.jpg" />
      </Head>
      <body className="uni-body" style={style}>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
