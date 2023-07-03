import React, { useState } from 'react'
import Slider from 'react-slick'
import './testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonial = () => {


  const testimonios = [
    {
      id: 1,
      nombre: "Ana García",
      perfil: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Gracias a Fiffuel, he logrado mejorar mi alimentación y perder peso de manera saludable. El servicio de nutrición en línea es muy cómodo y el asesoramiento personalizado ha hecho una gran diferencia en mi vida.",
    },
    {
      id: 2,
      nombre: "Carlos Martínez",
      perfil: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Estoy impresionado con los resultados que he obtenido gracias a Fiffuel. Los planes de alimentación personalizados y el seguimiento individualizado me han permitido alcanzar mis objetivos de manera efectiva. Recomiendo encarecidamente este servicio de nutrición en línea.",
    },
    {
      id: 3,
      nombre: "Laura Fernández",
      perfil: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Fiffuel ha cambiado mi forma de comer y me ha enseñado hábitos alimenticios saludables. Los nutricionistas son muy amables y profesionales. Estoy muy satisfecha con los resultados obtenidos y seguiré utilizando este servicio.",
    },
    {
      id: 4,
      nombre: "María López",
      perfil: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Gracias a Fiffuel, he recuperado mi confianza y he mejorado mi relación con la comida. Los nutricionistas me han brindado un apoyo invaluable en mi camino hacia una vida más saludable. ¡No puedo recomendarlo lo suficiente!",
    },
    {
      id: 5,
      nombre: "Juan González",
      perfil: "https://images.pexels.com/photos/16869355/pexels-photo-16869355/free-photo-of-blanco-y-negro-hombre-traje-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Fiffuel ha superado todas mis expectativas. La atención personalizada y los planes de alimentación adaptados a mis necesidades específicas han sido clave para lograr resultados sorprendentes. ¡Gracias por ayudarme a transformar mi vida!",
    },
    {
      id: 6,
      nombre: "Marta Silva",
      perfil: "https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contenido:
        "Estoy encantada con el servicio de nutrición en línea de Fiffuel. Me ha brindado herramientas prácticas y conocimientos fundamentales para llevar una alimentación saludable y equilibrada. ¡No puedo imaginar mi vida sin Fiffuel!",
    },
  ]

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  return (
    <section className='testimonios'>
      <h2 className='testimonio__titulo'>Testimonios</h2>
      <div className="testimonios__contenedor">
        <Slider {...settings}>
          {testimonios.map((testimonio)=>(
            <div key={testimonio.id} className="testimonios__item">
              <div className="testimonios__perfil">
              <img src={testimonio.perfil} alt=""/>
              </div>
              <h3 className='testimonios__nombre'>{testimonio.nombre}</h3>
              <div className="testimonios__contenido">
              <i className="fa-solid fa-quote-right testimonios__icono-comillas"></i>
                <p>{testimonio.contenido}</p>
              </div>
            </div>
        ))}
        </Slider>
        {/* <div className="testimonial-dots">
          {[...Array(3)].map((_, index)=>(
            <span key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={()=> setCurrentSlide(index)}></span>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export {Testimonial}
