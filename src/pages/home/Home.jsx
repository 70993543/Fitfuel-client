import React, { useEffect, useState } from 'react'
import Hero from './hero/Hero'
import {Offer} from './offer/Offer'
import { Descriptionservice } from './description/DescriptionService'
import { Testimonial } from './testimonial/Testimonial'
import { Preloader } from '../../components/preloader/Preloader'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <main>
      {loading ? (
        <Preloader></Preloader>
      ):(
      <div>
      <Hero></Hero>
      <Offer></Offer>
      <Descriptionservice></Descriptionservice>
      <Testimonial></Testimonial>
      </div>
      )}
    </main>
  )
}

export {Home};
