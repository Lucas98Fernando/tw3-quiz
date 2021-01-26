import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>The Witcher 3 - Quiz Alura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="The Witcher 3 - Quiz"/>
        <meta name="description" content="Imersão Alura React Next JS"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://tw3-quiz.lucas98fernando.vercel.app/"/>
        <meta property="og:title" content="The Witcher 3 - Quiz"/>
        <meta property="og:description" content="Imersão Alura React Next JS"/>
        <meta property="og:image" content=""/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://tw3-quiz.lucas98fernando.vercel.app/"/>
        <meta property="twitter:title" content="The Witcher 3 - Quiz"/>
        <meta property="twitter:description" content="Imersão Alura React Next JS"/>
        <meta property="twitter:image" content=""/>
      </Head>
    </div>
  )
}

export default IndexPage;