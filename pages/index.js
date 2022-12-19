import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/layout/Navbar'
import News from '../components/sections/News'
import HomePage from '../components/sections/Home'
import Drives from '../components/sections/Drives'
import Tum from '../components/sections/Tum'
import School from '../components/sections/School'
import Alumni from '../components/sections/Alumni'
import Podcast from '../components/sections/Podcast'
import Support from '../components/sections/Support'
import Footer from '../components/layout/Footer'
import Program from '../components/sections/Program'
import Work from '../components/sections/Work'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <secton>
        {/* <Navbar />
      <HomePage /> */}
      <News />
      {/* <Work />
      <Program />
      <Drives />
      <Tum />
      <School />
      <Alumni />
      <Podcast />
      <Support />
      <Footer /> */}
      </secton>
    </>
  )
}
