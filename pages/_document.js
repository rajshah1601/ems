/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ title, description, image, url }) {
  return (
    <Html lang="en">
      <Head>
        <title>Employee Management System - CRUD using NEXT JS AND MONGO DB</title>
        <meta name="title" content="Employee Management System"/>
          <meta name="description" content="CRUD Application in NEXT JS and MONGO DB"/>

            <meta property="og:title" content="Employee Management System" />
            <meta property="og:description" content="CRUD Application in NEXT JS and MONGO DB" />
            <meta property="og:image" content="https://raw.githubusercontent.com/rajshah1601/ems/master/thumbnail.png" />
            <meta property="og:url" content="https://ems-c4rr.vercel.app/" />
            <meta property="og:type" content="website" />

            <meta name="keywords" content="Employee Management System, CRUD, NEXT JS, MONGO DB"></meta>

            <meta name="twitter:title" content="Employee Management System" />
            <meta name="twitter:description" content="CRUD Application in NEXT JS and MONGO DB" />
            <meta name="twitter:image" content="https://raw.githubusercontent.com/rajshah1601/ems/master/thumbnail.png6" />
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="fb:app_id" content="332061129096483" />



            {/* <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} /> */}


          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
        )
}
