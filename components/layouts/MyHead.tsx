import Head from 'next/head'
import React from 'react'

const MyHead = () => {
  return (
    <Head>
      {/* Required Meta Tags Always Come First */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {/*preload resources*/}

      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      {/* Favicon */}
      <link rel="shortcut icon" type="image" href="" sizes="32x32" />
      <link rel="shortcut icon" type="image" href="" sizes="16x16" />

      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Khoi Nguyen" />
      <meta name="copyright" content="{organizer}" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:image:alt" content="Nextjs Example" />
      <meta property="og:title" content="Nextjs Example" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="Nextjs Example" />
      <title>Nextjs Example</title>
      <link type="image/x-icon" rel="shortcut icon" href="" />
    </Head>
  )
}

export default MyHead
