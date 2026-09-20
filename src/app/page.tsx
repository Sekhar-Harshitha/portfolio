'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Achievement from '@/components/sections/Achievement'
import Philosophy from '@/components/sections/Philosophy'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

// Dynamically import cursor to avoid SSR issues
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Achievement />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
