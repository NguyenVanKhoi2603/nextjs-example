import React, { FC, ReactNode } from 'react'
import Footer from './Footers/Footer1'
import Head from './MyHead'

const MyLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head />
      <div className="main-container">
        <main id="content" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyLayout
