import React, { useState } from 'react';
import './appointment.css'; 
import axios from 'axios';

const Appointment = () => {
    const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState(false);
  const [nota, setNota] = useState('');
  const [celular, setCelular] = useState('');
  const [citaGuardada, setCitaGuardada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const citaData = {
      fecha,
      hora,
      estado,
      nota,
      celular
    };

    // Realiza la solicitud POST utilizando Axios para enviar la cita
    axios
      .post('http://localhost:8080/api/v1/cita/add', citaData)
      .then((response) => {
        console.log('Cita guardada:', response.data);
        // Limpia los campos después de guardar la cita
        setFecha('');
        setHora('');
        setEstado(false);
        setNota('');
        setCelular('');
        // Actualiza el estado para mostrar el mensaje de cita guardada
        setCitaGuardada(true);
        // Redirige a la página de boleta en PDF (reemplaza "URL_BOLETA_PDF" con la URL correcta)
        /* window.location.href = '/cita/ticket'; */
      })
      .catch((error) => {
        console.error('Error al guardar la cita:', error);
      });
  };

  return (
    <div className="appointment">
      <h2 className="appointment__title">Nueva cita</h2>
      {citaGuardada && <p className="appointment__message">¡Cita guardada exitosamente!</p>}
      <form className="appointment__form" onSubmit={handleSubmit}>
        <div className="appointment__form-group">
          <label className="appointment__label">Fecha:</label>
          <input
            className="appointment__input"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="appointment__form-group">
          <label className="appointment__label">Hora:</label>
          <input
            className="appointment__input"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="appointment__form-group">
          <label className="appointment__label">Estado:</label>
          <input
            className="appointment__input"
            type="checkbox"
            checked={estado}
            onChange={(e) => setEstado(e.target.checked)}
          />
        </div>
        <div className="appointment__form-group">
          <label className="appointment__label">Nota:</label>
          <textarea
            className="appointment__textarea"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          ></textarea>
        </div>
        <div className="appointment__form-group">
          <label className="appointment__label">Celular:</label>
          <input
            className="appointment__input"
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <button className="appointment__button" type="submit">
          Guardar cita
        </button>
      </form>
    </div>
  );
};

export {Appointment}

