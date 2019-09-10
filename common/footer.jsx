import * as React from 'react'
import Link from 'next/link'

const Footer = () => (
  <>
    <div className="footer">
      <Link href="/">
        A+V
      </Link>
      <Link href="/gallery">
        gallery
      </Link>
      <Link href="/about">
        about
      </Link>
      <Link href="/contact">
        contact
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
