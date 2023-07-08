import React from 'react'
import './service.css'

const Service = () => {
  return (
    <section className="service">
        <div className="service__options">
        <select className="service__select">
          <option value="">Seleccione una opción</option>
          <option value="bajar-peso">Bajar de peso</option>
          <option value="subir-peso">Subir de peso</option>
          <option value="nutricion-infantil">Nutrición infantil</option>
          <option value="problemas-cronicos">Problemas crónicos</option>
          <option value="masa-muscular">Masa muscular</option>
        </select>
        <div className="service__search">
          <input type="text" className="service__search-input" placeholder="Buscar..." />
          <i className='fas fa-search service__search-icon'></i>
        </div>
      </div>
        <div className="service__columns">
        <div className="service__column">
            <div className="service__card">
                <div className="service__card-image">
                    <img src="https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-gente-mujer-relajacion-conexion.jpeg" alt="" className='service-image' />
                </div>
                <div className="service__content">
                    <h2 className="service__content-title">
                        Carlos Perez
                    </h2>
                    <div className="service__content-box"
                    >
                        <span className='service__content-badge'>Objetivo</span>
                        <p className="service__content-objective">
                        Bajar de peso
                    </p>
                    </div>
                    <button className='servicio__content-btn'>Ver detalle</button>
                </div>
            </div>
        </div>
        <div className="service__column">
            <div className="service__card">
                <div className="service__card-image">
                    <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg" alt="" className='service-image' />
                </div>
                <div className="service__content">
                    <h2 className="service__content-title">
                        Carlos Perez
                    </h2>
                    <div className="service__content-box"
                    >
                        <span className='service__content-badge'>Objetivo</span>
                        <p className="service__content-objective">
                        Bajar de peso
                    </p>
                    </div>
                    <button className='servicio__content-btn'>Ver detalle</button>
                </div>
            </div>
        </div>
        <div className="service__column">
            <div className="service__card">
                <div className="service__card-image">
                    <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='service-image' />
                </div>
                <div className="service__content">
                    <h2 className="service__content-title">
                        Carlos Perez
                    </h2>
                    <div className="service__content-box"
                    >
                        <span className='service__content-badge'>Objetivo</span>
                        <p className="service__content-objective">
                        Bajar de peso
                    </p>
                    </div>
                    <button className='servicio__content-btn'>Ver detalle</button>
                </div>
            </div>
        </div>
        <div className="service__column">
            <div className="service__card">
                <div className="service__card-image">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='service-image' />
                </div>
                <div className="service__content">
                    <h2 className="service__content-title">
                        Carlos Perez
                    </h2>
                    <div className="service__content-box"
                    >
                        <span className='service__content-badge'>Objetivo</span>
                        <p className="service__content-objective">
                        Bajar de peso
                    </p>
                    </div>
                    <button className='servicio__content-btn'>Ver detalle</button>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export {Service}