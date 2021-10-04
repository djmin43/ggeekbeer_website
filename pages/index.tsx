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
        <meta property="og:image" content="https://scontent.ficn3-1.fna.fbcdn.net/v/t1.6435-9/123139391_4654108014630952_6374064862724962720_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=8KG5dlcIRqQAX_mqYWE&tn=W-DCgKfCvncNO5OJ&_nc_ht=scontent.ficn3-1.fna&oh=e1d25c54f34ad0fd49096c951a873769&oe=6180E34F" key="image" />
      </Head>
      <Head>
        <meta property="og:url" content="https://ggeekbeer.com" key="url" />
      </Head>
    </>
  )
}

export default Home
