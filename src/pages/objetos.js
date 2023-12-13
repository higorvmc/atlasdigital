import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Pages.module.css'
import Link from 'next/link'

export default function Objetos({objetos}) {
  return (
    <div>
      <Head>
        <title>Meu App - Objetos</title>
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.objetos}>
          <h1>Bandeiras</h1>
          {objetos.map((objeto, index) => (
            <Link href='/description/[id]' as={`/description/${index}`} className={styles.Link}>
              <div key={objeto.id}>
                <p>{objeto.nome}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
  const repo = await res.json()
  const objetos = await repo
  return {
    props: { objetos }
  }
})