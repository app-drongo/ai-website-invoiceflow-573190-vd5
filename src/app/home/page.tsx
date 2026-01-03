import type { Metadata } from 'next'

import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Benefits from '@/components/sections/home/Benefits'
import Testimonials from '@/components/sections/home/Testimonials'
import Pricing from '@/components/sections/home/Pricing'
import Contact from '@/components/sections/home/Contact'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Home',
}

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
