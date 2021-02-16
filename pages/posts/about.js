import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Date from '../../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Old-Records About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <h1>
          Welcome to <Link href="/">
          <a> Old-Records </a>
          </Link>
           About Page
        </h1>
          <p>
          On Login page <br />Their Are Two Profiles for their user to use. <br />Admin <br />User
          </p>
          <p>
          In this app we are gone to use Mysql Databse<br /> which
          is going to use for data collection.<br />
          And the main Moto of the app is to create a databse<br />
          of people details like their name, contact, address, working status and etc.
          <br />
          The app going to make it easier for the user to get all info about
          <br />anybody they want by using their profiles.
          </p>

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Profiles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}