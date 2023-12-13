import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Pages.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu App - Home</title>
      </Head>

      <Navbar/>
      <div className={styles.container}>
        <div className={styles.home}>
          <h1>Página Inicial</h1>
          <p>
            Bem-vindo ao Atlas Digital: Explorando o Mundo em suas Pontas dos Dedos!
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}