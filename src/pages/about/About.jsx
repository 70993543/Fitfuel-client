import React, { useEffect, useState } from 'react'
import { Know } from './know/know'
import { History } from './history/History'
import { Proposito } from './proposito/Proposito'
import { Preloader } from '../../components/preloader/Preloader'

const About = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <main>
        {loading? (
          <Preloader></Preloader>
        ):(
          <div>
            <Know></Know>
            <History></History>
            <Proposito></Proposito>
          </div>
        )}
    </main>
  )
}

export {About}