import React from "react";
import "./descriptionservice.css";

const Descriptionservice = () => {
	return (
		<section className="descripcion-servicio">
      <h2 className="descripcion-servicio__titulo">Empresa Fitfuel</h2>
			<div className="descripcion-servicio__wrapper">
      <div className="descripcion-servicio__contenedor">
				
				<p className="descripcion-servicio__parrafo">
					Alcanza tus metas de salud y bienestar con nuestro servicio de
					nutrición en línea. En Fiffuel, creemos en la importancia de una
					alimentación saludable y personalizada para mejorar tu calidad de
					vida.
				</p>
				<p className="descripcion-servicio__parrafo">
					Nuestro enfoque integral y basado en evidencia científica te brinda la
					guía y el apoyo necesarios para lograr tus objetivos de forma efectiva
					y sostenible.
				</p>
				<p className="descripcion-servicio__parrafo">
					Al elegir Fiffuel, podrás disfrutar de los siguientes beneficios:
				</p>
				<ul className="descripcion-servicio__lista">
					<li className="descripcion-servicio__item">
						{/* <i className="fas fa-utensils"></i> */} <span>Acesoria de alimentación
						personalizados</span>
					</li>
					<li className="descripcion-servicio__item">
						{/* <i className="fas fa-user-md"></i> */} 
						<span>Nutricionistas con experiencia.</span>
					</li>
					<li className="descripcion-servicio__item">
						{/* <i className="fas fa-chart-line"></i> */} <span>Seguimiento individualizado</span>
					</li>
				</ul>
			</div>
			<div className="descripcion-servicio__imagen-nutricionista">
				<img
					src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Nutricionista"
					className="descripcion-servicio__imagen"
				></img>
        <div className="descripcion-servicio__overlay">
        <a href="#" className="boton boton-conocenos">
					Conócenos
				</a>
        </div>
			</div>
      <div className="descripcion-servicio__btn">
        <a href="#" className="boton boton-conocenos">
					Conócenos
				</a>
        </div>
      </div>
		</section>
	);
};

export { Descriptionservice };
