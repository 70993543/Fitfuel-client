import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './detail.css'
import { Link } from 'react-router-dom';


const Detail = () => {
    const {id} = useParams();
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
    <section className='detalle'>

       <div className='detalle_video'>
            <iframe src={`https://www.youtube.com/embed/${detalle.videoUrl}`}  allowFullScreen  title='Michaela' className='detalle_youtube'></iframe>
        </div>
        <div className='detalle_contenido'>
            <h2 className='detalle_nombre'>{detalle.nombre}</h2>
            <div className='detalle_wrap'>
            <p className='detalle_especialidad'>{detalle.especialidad}</p>
            <p className='detalle_precio'>S/{detalle.precio}</p>
            
            </div>
            
            <p className='detalle_descripcion'>{detalle.descripcion}</p>
        </div>
        <div className='detalle_redes'>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-whatsapp detalle_redes_icon"></i>{detalle.whatsapp}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-facebook detalle_redes_icon"></i>{detalle.facebook}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-instagram detalle_redes_icon"></i>{detalle.instagram}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-linkedin detalle_redes_icon"></i>{detalle.linkedin}</a>
        </div>
        <div className='detalle_btn'>
            <Link to={'/servicios/detalle/cita'} className='detalle_link'>Agendar</Link>
        </div>
    </section>
        )
}

export {Detail};
