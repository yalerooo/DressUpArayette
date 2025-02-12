// src/components/CaptureButton.js
import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

function CaptureButton({ targetElementId, imageSrc }) {
    const [capturing, setCapturing] = useState(false);
    const buttonRef = useRef(null);

    const handleCapture = () => {
        console.log("handleCapture fue llamada!");
        const element = document.getElementById(targetElementId);
        console.log("Elemento encontrado por ID:", element);
        if (!element) {
            console.error(`Elemento con id "${targetElementId}" no encontrado.`);
            return;
        }

        setCapturing(true);

        requestAnimationFrame(() => {
            if (buttonRef.current) {
               buttonRef.current.style.visibility = 'hidden';
            }

            console.log("Intentando capturar con html2canvas...");
            html2canvas(element)
            .then(canvas => {
                console.log("html2canvas promesa resuelta, canvas:", canvas);
                requestAnimationFrame(() => {
                    if (buttonRef.current) {
                       buttonRef.current.style.visibility = 'visible';
                    }
               });

                const dataURL = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = dataURL;
                downloadLink.download = 'arayette_capture.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                setCapturing(false);
                console.log("Captura completada y descarga iniciada.");
            })
            .catch(error => {
                console.error("Error al capturar el elemento:", error);
                if (buttonRef.current) {
                    buttonRef.current.style.visibility = 'visible';
                 }
                setCapturing(false);
                console.log("Error en html2canvas captura.");
            });
        });
    };

    return (
        <img
            ref={buttonRef}
            src={imageSrc}
            alt="Capture"
            className="capture-button-image"
            onClick={() => handleCapture()} // This line is changed - comment removed from inside prop
            style={{ cursor: 'pointer'}}
        />
    );
}

export default CaptureButton;