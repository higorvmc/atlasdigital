import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/Pages.module.css'

export default function Description({ objeto = {} }) {
  return (
    <div>
      <Head>
        <title>Meu App - Teste</title>
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.descricao}>
          <h1>{objeto.nome}</h1>
          <p>{objeto.usuario}</p>
          <p>{objeto.descricao}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
  const repo = await res.json()
  const objeto = await repo[context.params.id];
  return {
    props: { objeto }
  }

})

export async function getStaticPaths() {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
  const repo = await res.json()
  const objetos = await repo;
  const paths = objetos.map((objeto, index) => {
    return { params: { id: String(index) } };
  });
  return {
    paths,
    fallback: false,
  }
}