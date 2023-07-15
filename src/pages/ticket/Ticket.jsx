import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import axios from 'axios';

const Ticket = () => {
  const [citaInfo, setCitaInfo] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET utilizando Axios para obtener la información de la cita
    axios
      .get('http://localhost:8080/api/v1/cita/list')
      .then(response => {
        // Actualizar el estado con la información de la cita recibida
        setCitaInfo(response.data);
      })
      .catch(error => {
        console.error('Error al obtener la información de la cita:', error);
      });
  }, []);

  const BoletaPDF = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Detalle de la Cita</Text>
          {/* Mostrar la información de la cita en la boleta */}
          {citaInfo && (
            <View>
              <Text>Fecha: {citaInfo.fecha}</Text>
              <Text>Hora: {citaInfo.hora}</Text>
              <Text>Estado: {citaInfo.estado ? 'Confirmada' : 'Pendiente'}</Text>
              <Text>Nota: {citaInfo.nota}</Text>
              <Text>Celular: {citaInfo.celular}</Text>
              {/* Puedes mostrar más detalles de la cita en la boleta */}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <h1>Boleta de la Cita</h1>
      {citaInfo ? (
        <PDFViewer style={styles.pdfViewer}>
          <BoletaPDF />
        </PDFViewer>
      ) : (
        <p>Cargando boleta de la cita...</p>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  pdfViewer: {
    width: '100%',
    height: '500px',
  },
});

export {Ticket};
