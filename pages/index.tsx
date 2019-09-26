import * as React from 'react'

import Footer from 'common/footer'
import Head from 'common/head'

const Index = () => (
  <div id="root">
    <Head>
      <title>Alex Chang | Home</title>
    </Head>
    <style jsx global>
      {`
      html, body {
        display: flex;
        height: 100%;
        width: 100%;
        margin: 0;
      }
      body {
        background-image: url("/static/images/index/background.jpg");
        background-size: cover;
        font-family: 'Roboto', sans-serif;
      }
      #root {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        background: rgba(0,0,0,.15);
      }
      `}
    </style>
    <h1>alex chang</h1>
    <style jsx>
      {`
      h1 {
        color: rgba(255,255,255,.60);
        font-weight: 300;
        margin-left: 8vw;
        margin-top: 20vh;
        margin-bottom: 0;
        font-size: 6rem;
      }`}
    </style>
    <h2>growing more every day</h2>
    <style jsx>
      {`
      h2 {
        color: rgba(255,255,255,.70);
        font-weight: normal;
        margin-top: 0;
        margin-left: 8vw;
        font-size: 4rem;
        font-family: 'La Belle Aurore', cursive;
      }`}
    </style>
    <Footer />
  </div>
)

export default Index
