import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import EbonyMemo from '../components/EbonyMemo'
import Gamedev from '../components/Gamedev'
import Others from '../components/Others'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import LatestGame from '../components/LatestGame'
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
                <Navbar/>
                <div className="page--content">
                    <Decorator/>
                    <Banner/>
                    <EbonyMemo/>
                    <LatestGame/>
                    <Gamedev/>
                    <Others/>
                    <CallToAction/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
