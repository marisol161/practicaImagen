import React, { useState } from 'react';
import telefono from '../src/img/telefono.png';
import mensaje from '../src/img/mensaje.png';
import cuaderno from '../src/img/cuaderno.png';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageResolution, setImageResolution] = useState(null);

  const handleCardClick = (card, image, resolution) => {
    setSelectedCard(card);
    setSelectedImage(image);
    setImageResolution(resolution);
  };

  return (
    <div className="container-fluid mt-5 d-flex flex-column align-items-center">
      <div className="selected-card-container mt-4">
        {selectedImage && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Imagen seleccionada</h5>
              <img src={selectedImage} className="img-fluid" alt="Selected" />
              {imageResolution && (
                <p>Nombre: {selectedCard} | Resolución: {imageResolution.width}x{imageResolution.height}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="d-flex mb-6">
        <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => handleCardClick('Contacto', telefono, { width: 500, height: 500 })}>
          <img src={telefono} className="card-img-top" alt="Telephone" />
          <div className="card-body">
            <p className="card-text">Contactar con la organización</p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => handleCardClick('Mensaje', mensaje, { width: 600, height: 400 })}>
          <img src={mensaje} className="card-img-top" alt="Message" />
          <div className="card-body">
            <p className="card-text">Enviar un mensaje a la organización</p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => handleCardClick('Cuaderno', cuaderno, { width: 700, height: 300 })}>
          <img src={cuaderno} className="card-img-top" alt="Notes" />
          <div className="card-body">
            <p className="card-text">Realizar anotaciones de la organización</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
