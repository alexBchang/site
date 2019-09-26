import * as React from 'react'

import Link from 'next/link'

const Footer = () => (
  <>
    <div className="footer">
      <Link href="/">
        <a href="/">A+V</a>
      </Link>
      <Link href="/gallery">
        <a href="/gallery">gallery</a>
      </Link>
      <Link href="/about">
        <a href="/about">about</a>
      </Link>
      <Link href="/contact">
        <a href="/contact">contact</a>
      </Link>
    </div>
    <style jsx>
      {`
        .footer {
          position: fixed;
          bottom: 0;
        }
     `}
    </style>
  </>
)

export default Footer
