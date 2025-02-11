import React from 'react';
import html2canvas from 'html2canvas';

function ButtonBar({ onSave, onLoad, onDownload }) {

    const handleDownload = () => {
      html2canvas(document.querySelector('.game-container')).then(canvas => {
          const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
          const link = document.createElement('a');
          link.download = 'arayette.png';
          link.href = image;
          link.click();
      });
    };


    return (
        <div className="button-container">
            <button className="game-button" onClick={onSave}>Guardar</button>
            <button className="game-button" onClick={onLoad}>Cargar</button>
            <button className="game-button" onClick={handleDownload}>Descargar</button>
        </div>
    );
}

export default ButtonBar;