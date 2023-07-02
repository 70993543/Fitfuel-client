import React, {useState, useEffect} from 'react'
import './offer.css'

const Offer = () => {
    const [remainingTime, setRemainingTime] = useState(null)

    useEffect(()=>{
        const endTime = new Date('2023-07-30T23:59:59')
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDiff = endTime - currentTime;
            if (timeDiff <= 0) {
                clearInterval(interval);
                setRemainingTime(null);
            }else{
                const days = Math.floor(timeDiff / (1000 * 80 * 60 * 24))
                const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDiff / 1000) % 60)
                setRemainingTime({days, hours, minutes, seconds})
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <section className='oferta__section'>
        <div className="oferta__container">
            <div className="oferta__description">
                <h2 className="oferta__titulo">!Oferta Especial</h2>
                <p className='oferta__sutitulo'>Aprovecha nuestro increible oferta por tiempo limitado</p>
            </div>
            <div className="oferta__timer">
            {
        remainingTime && (
          <div className="oferta__timer-box">
            <div className="oferta__time-box">
              <div className="oferta__time">{remainingTime.days}</div>
              <div className="oferta__time-label">Días</div>
            </div>
            <div className="oferta__time-separator">:</div>
            <div className="oferta__time-box">
              <div className="oferta__time">{remainingTime.hours}</div>
              <div className="oferta__time-label">Horas</div>
            </div>
            <div className="oferta__time-separator">:</div>
            <div className="oferta__time-box">
              <div className="oferta__time">{remainingTime.minutes}</div>
              <div className="oferta__time-label">Minutos</div>
            </div>
            <div className="oferta__time-separator">:</div>
            <div className="oferta__time-box">
              <div className="oferta__time">{remainingTime.seconds}</div>
              <div className="oferta__time-label">Segundos</div>
            </div>
          </div>
        )
      }
      {!remainingTime && <p>La oferta ha expirado</p>}
            </div>
        </div>
    </section>
  )
}

export {Offer}
