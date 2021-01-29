import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>The Witcher 3 - Quiz Alura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://banner2.cleanpng.com/20180404/dhw/kisspng-the-witcher-3-wild-hunt-geralt-of-rivia-the-witch-the-witcher-5ac56a4639c760.5775096615228872382367.jpg" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="The Witcher 3 - Quiz"/>
        <meta name="description" content="Imersão Alura React - Next JS"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://tw3-quiz.lucas98fernando.vercel.app/"/>
        <meta property="og:title" content="The Witcher 3 - Quiz"/>
        <meta property="og:description" content="Imersão Alura React - Next JS"/>
        <meta property="og:image" content="https://i.imgur.com/54xlEH2.jpg"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://tw3-quiz.lucas98fernando.vercel.app/"/>
        <meta property="twitter:title" content="The Witcher 3 - Quiz"/>
        <meta property="twitter:description" content="Imersão Alura React - Next JS"/>
        <meta property="twitter:image" content="https://i.imgur.com/54xlEH2.jpg"/>

        {/* Google Fonts - Poppins*/}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      {/* Google Fonts - Montserrat */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
      </Head>
    </div>
  )
}

export default IndexPage;