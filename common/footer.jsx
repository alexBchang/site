import * as React from 'react'
import Link from 'next/link'

const Footer = () => (
  <>
    <div className="footer">
      <Link href="/">
        Home
      </Link>
      <Link href="/gallery">
        Gallery
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
