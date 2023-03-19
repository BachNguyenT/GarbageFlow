import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GarbageFlow</title>
        <meta name="description" content="Flow Waste to Right Place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Created By &nbsp;
            <code className={styles.code}>Bach, Jack, Maria, Rajab</code>
          </p>
          <div>
            <a
              href="https://utmist.gitlab.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organized By
              <Image
                src="/utmistlogo.svg"
                alt="UTMIST Logo"
                className={styles.vercelLogo}
                width={300}
                height={72}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/grouplogo.svg"
            alt="Group Logo"
            width={2500}
            height={513}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/BachNguyenT/utmist-2023.git"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover in-depth information and features about our model here !
            </p>
          </a>

          <a
            href="https://devpost.com/software/garbageflow"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              DevPost <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about our story from initial steps to final product.
            </p>
          </a>

          <a
            href="https://utmist-2023.vercel.app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Experience <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Try our model and classify daily wastes with ease! 
            </p>
          </a>

          <a
            href="https://linktr.ee/garbageflow"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A group of aspiring univeristy students working towards a brighter world
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
