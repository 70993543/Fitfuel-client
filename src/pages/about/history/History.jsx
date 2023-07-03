import React from "react";
import "./history.css";

function History() {
	return (
		<section className="historia">
			<h2 className="historia__titulo">Historia</h2>
			<div className="historia__columnas">
				<div className="historia__imagen-primario">
					<img
						src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="" className="historia__imagen"
					/>
				</div>
				<div className="historia__contenido-primario">
					<p className="historia__contenido-parrafo">
						La empresa Fit Fuel tiene una historia sólida en el mercado de la
						alimentación saludable. Desde su fundación, ha buscado brindar
						soluciones nutricionales a sus clientes para mejorar su salud y
						bienestar. .
					</p>
				</div>

				<div className="historia__contenido-secundario">
					<p className="historia__contenido-parrafo">
						A lo largo de los años, ha logrado establecerse como líder en el
						sector, gracias a la experiencia y profesionalismo de sus
						nutricionistas y a la satisfacción de sus clientes
					</p>
				</div>
				<div className="historia__imagen-secundario">
					<img
						src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="" className="historia__imagen"
					/>
				</div>
			</div>
		</section>
	);
}

export { History };
