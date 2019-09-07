import * as React from 'react'
import NextHead from 'next/head'

const Head = ({ children }) => (
  <NextHead>
    <link href="https://fonts.googleapis.com/css?family=La+Belle+Aurore|Roboto:300&display=swap" rel="stylesheet" />
    {children}
  </NextHead>
)

export default Head
