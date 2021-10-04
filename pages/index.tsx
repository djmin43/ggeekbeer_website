import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>끽비어컴퍼니</title>
        <meta property="og:title" content="끽비어컴퍼니" key="title" />
      </Head>
      <Head>
        <meta property="og:description" content="맥주를 사랑하는 사람들이 모여 만든 공간입니다. 국내외 브루어리 맥주를 선별하여 제공합니다." key="description" />
      </Head>
      <Head>
        <meta property="og:image" content="https://scontent.ficn3-1.fna.fbcdn.net/v/t39.30808-6/214705339_5818441701530905_2161549511797673616_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=SaG8bND4kx4AX_YnDEm&_nc_ht=scontent.ficn3-1.fna&oh=114b56d760f56ba0fe80c56b42e6bec3&oe=616027E2" key="image" />
      </Head>
      <Head>
        <meta property="og:url" content="https://ggeekbeer.com" key="url" />
      </Head>
    </>
  )
}

export default Home
