import { server } from "../config"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  const [result] = await res.json()
  return {
    props: {
      result
    }
  }
}

export default function Home(props) {
  const result = props.result;
  return (
    <div>
      <Head>
        <title>Next.js Hello Traveller</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>HOMEPAGE</h1>
      <p className="quest">
        Hi traveller,
        Onice I was an adventurer like you, untill I got an arrow to the knee.
        I bestow upon you the glory of finding the two brothers lost in this dungeon App.
        The mighty Kurami and his famous brother Yanko are disguised as parts of this application.
        Good Luck Adventurer
      </p>
      <style jsx>{`.quest{font-size:40px;text-align:right}h1{text-align:center}`}</style>

      <p style={{ fontSize: "20px" }}>{JSON.stringify(result)}</p>
      <h1>{result.body}</h1>
    </div>
  )
}

