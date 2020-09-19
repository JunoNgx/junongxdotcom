import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import EbonyMemo from '../components/EbonyMemo'
import Gamedev from '../components/Gamedev'
import Others from '../components/Others'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Wonyun from '../components/Wonyun'
import Decorator from '../components/Decorator'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Juno Nguyen</title>
                <meta content={"Juno Nguyen"} key="title"/>
                <meta name="theme-color" content="#66CDAA"/>
				<meta name="description" content="Singapore-based software developer, web developer, game developer, and artist"/>
            </Head>
            <div className="page">
                {/* <div className="page--links"> */}
                    <Navbar/>
                {/* </div> */}
                <div className="page--content">
                    <Decorator/>
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
