import React, {useRef, useEffect} from "react";
import "./proposito.css";

const Proposito = () => {

    /* const misionRef = useRef(null)
    const visionRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Calcula la posición relativa al desplazamiento
            const misionOffset = misionRef.current.getBoundingClientRect().top  + scrollTop;
            const visionOffset = visionRef.current.getBoundingClientRect().top + scrollTop;

            // Aplica el efecto parallax modificando las propiedades css
            misionRef.current.style.transform= `translateY(${misionOffset * 0.5}px)`;
            visionRef.current.style.transform = `translateY(${visionOffset * 0.5}px)`;
        }
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
    }, []) */

	return (
		<section className="proposito">
			<div className="proposito__mision" /* ref={misionRef} */>
				<h2 className="proposito__titulo">Misión</h2>
				<p className="proposito__descripcion">
					Nuestra misión es ofrecer nuevas técnicas de alimentación que mejoren
					la salud de la población donde las ejecutemos.
				</p>
			</div>
			<div className="proposito__vision" /* ref={visionRef} */>
				<h2 className="proposito__titulo">Visión</h2>
				<p className="proposito__descripcion">
					En el año 2025, nos vemos expandiendo nuestros asesoramientos y
					obteniendo el liderazgo global para servir mejor a más consumidores.
				</p>
			</div>
		</section>
	);
};

export { Proposito };
