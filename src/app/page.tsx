'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
