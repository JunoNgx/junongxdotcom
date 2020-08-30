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
                <meta content={"Juno Nguyen"} key="title"/>
                <meta name="theme-color" content="#242424"/>
				<meta name="description" content="Singapore-based software developer, web developer, game developer, and artist"/>
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
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
