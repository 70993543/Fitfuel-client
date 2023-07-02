import React from 'react'
import Hero from './hero/Hero'
import {Offer} from './offer/Offer'
import { Descriptionservice } from './description/DescriptionService'

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <Offer></Offer>
      <Descriptionservice></Descriptionservice>
    </main>
  )
}

export {Home};
