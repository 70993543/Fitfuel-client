import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Information = () => {
    const [id] = useParams();
    const [detalle, setDetalle] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/nutricionista/${id}`).then(response => {
            setDetalle(response.data)
        }).catch(error => {
            console.log('Error al obtener el detalle', error)
        })
    }, [id])

    if (!detalle) {
        return <div>Error al cargar el detalle</div>
    }

  return (
    <section className='servicio_detalle'>
        
        <div className='detalle_video'>
            <iframe src={`https://www.youtube.com/embed/${item.video}`}  allowFullScreen  title='Michaela' className='detalle_youtube'></iframe>
        </div>
        {/* <div className='detalle_contenido'>
            <h2 className='detalle_nombre'>{nutricionista.profesion}</h2>
            <div className='detalle_wrap'>
            <p className='detalle_profesion'>{nutricionista.nombre}</p>
            <p className='detalle_precio'>S/{nutricionista.precio.precio}</p>
            
            </div>
            
            <p className='detalle_descripcion'>{nutricionista.descripcion}</p>
            
            

        </div> */}
        <div className='detalle_redes'>
                {/* <a href="" className='detalle_redes_link'><i className="fa-brands fa-whatsapp detalle_redes_icon"></i>{servicio.nutricionista.whatsapp}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-facebook detalle_redes_icon"></i>{servicio.nutricionista.facebook}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-instagram detalle_redes_icon"></i>{servicio.nutricionista.instagram}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-linkedin detalle_redes_icon"></i>{servicio.nutricionista.linkedin}</a> */}
            </div>
            <div className='detalle_btn'>
            
            </div>
        </section>
  )
}

export {Information}
