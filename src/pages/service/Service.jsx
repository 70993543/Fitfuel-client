import React, { useEffect, useState } from 'react';
import './service.css';
import axios from 'axios';
import { Preloader } from '../../components/preloader/Preloader';
import { Link } from 'react-router-dom';

const Service = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true)

useEffect(()=> {
    setTimeout(()=>{
        setLoading(false);
    }, 1000);
}, [])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/nutricionista/list');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm]);

  const filterData = () => {
    const filtered = data.filter((item) =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };


  return (
    <main>
        {loading ? (
            <Preloader></Preloader>
        ):(
            <div>
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
          <input
            type="text"
            className="service__search-input"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search service__search-icon"></i>
        </div>
      </div>
      <div className="service__columns">
        {searchTerm.trim() === '' ? (
          data.map((item) => (
            <div className="service__column" key={item.nutricionistaId}>
              <div className="service__card">
                <div className="service__card-image">
                  <img src={item.imagen} alt="" className="service-image" />
                </div>
                <div className="service__content">
                  <h2 className="service__content-title">{item.nombre}</h2>
                  <div className="service__content-box">
                    <span className="service__content-badge">Objetivo</span>
                    <p className="service__content-objective">
                      {item.objetivo?.nombre || 'Sin objetivo'}
                    </p>
                  </div>
                  <Link to={`/service/detail/${item.nutricionistaId}`} className="servicio__content-btn">Ver detalle</Link>
                </div>
              </div>
            </div>
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="service__column" key={item.nutricionistaId}>
              <div className="service__card">
                <div className="service__card-image">
                  <img src={item.imagen} alt="" className="service-image" />
                </div>
                <div className="service__content">
                  <h2 className="service__content-title">{item.nombre}</h2>
                  <div className="service__content-box">
                    <span className="service__content-badge">Objetivo</span>
                    <p className="service__content-objective">
                      {item.objetivo?.nombre || 'Sin objetivo'}
                    </p>
                  </div>
                  <Link to={`/service/detail/${item.nutricionistaId}`} className="servicio__content-btn">Ver detalle</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </section>
            </div>
        )}
    </main>

  );
        };

export {Service};
