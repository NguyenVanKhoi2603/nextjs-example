import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import styles from 'styles/Home.module.css'

const Parallax: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0)
  const boxTest = useRef(null)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Parallax</title>
        <meta name="description" content="Parallax animations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br /><br /><br /><br /><br />
      <main className={styles.main}>
        <h1 className={styles.title} style={{ transform: `translateY(${-offsetY * 0.5 * .2}px)` }}>
          Welcome to <a href="https://nextjs.org">PARALLAX!</a>
        </h1>

        <p className={styles.description} style={{ transform: `translateY(${-offsetY * .5 * .4}px)` }}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid} >
          <a href="https://nextjs.org/docs" className={styles.card} style={{ transform: `translateX(-${offsetY * 2}px)` }}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card} style={{ transform: `translateX(${offsetY * 2}px)` }}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
            style={{ transform: `translateX(-${offsetY * 0.5}px)` }}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            style={{ transform: `translateX(${offsetY * 0.4}px)` }}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <div ref={boxTest} style={{ backgroundColor: 'green', padding: '10rem 30rem', transform: `translateY(${-offsetY * 0.5}px)` }}>
          <div style={{ backgroundColor: 'pink', transform: `translateX(${-offsetY * 0.5}px)` }}>
            asdasdh ajkhdasdasasdad
          </div>
        </div>
        <div style={{ backgroundColor: 'red', padding: '10rem 30rem', transform: `translateY(${-offsetY * 0.}px)` }}>
          asdasdh ajkhdasdasasdad
        </div>

        <div style={{ backgroundColor: 'green', padding: '10rem 30rem', transform: `translateY(${-offsetY * 0.3}px)` }}>
          asdasdh ajkhdasdasasdad
        </div>
        <div style={{ backgroundColor: 'red', padding: '10rem 30rem', transform: `translateY(${-offsetY * 0.1}px)` }}>
          asdasdh ajkhdasdasasdad
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Parallax
