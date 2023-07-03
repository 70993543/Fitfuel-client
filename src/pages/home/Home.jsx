import React from 'react'
import Hero from './hero/Hero'
import {Offer} from './offer/Offer'
import { Descriptionservice } from './description/DescriptionService'
import { Testimonial } from './testimonial/Testimonial'

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <Offer></Offer>
      <Descriptionservice></Descriptionservice>
      <Testimonial></Testimonial>
    </main>
  )
}

export {Home};
