import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import ContactLinks from '../components/ContactLinks'
import Banner from '../components/Banner'
import EbonyMemo from '../components/EbonyMemo'
import Gamedev from '../components/Gamedev'
import Others from '../components/Others'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Wonyun from '../components/Wonyun'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Juno Nguyen</title>
                <meta property="og:title" content={"Juno Nguyen"} key="title"/>
            </Head>
            <div className="page">
                {/* <div className="page--links"> */}
                    <ContactLinks/>
                {/* </div> */}
                <div className="page--content">
                    <Banner/>
                    <EbonyMemo/>
                    <Wonyun/>
                    <Gamedev/>
                    <Others/>
                    <ContactMe/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
