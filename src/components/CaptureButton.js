// src/components/CaptureButton.js
import React, { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import html2canvas from 'html2canvas';

function CaptureButton({ targetElementId, imageSrc }) {
    const [capturing, setCapturing] = useState(false);
    const buttonRef = useRef(null); // Create a ref for the button element

    const handleCapture = () => {
        const element = document.getElementById(targetElementId);
        if (!element) {
            console.error(`Element with id "${targetElementId}" not found.`);
            return;
        }

        setCapturing(true);

        // Use requestAnimationFrame to ensure the style change happens BEFORE the next repaint
        requestAnimationFrame(() => {
             if (buttonRef.current) {
                buttonRef.current.style.visibility = 'hidden'; // Directly manipulate visibility
             }


            html2canvas(element).then(canvas => {

                // Restore visibility AFTER the capture is complete, inside another requestAnimationFrame
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
            });
        });
    };

    return (
        <img
            ref={buttonRef} 
            src={imageSrc}
            alt="Capture"
            className="capture-button-image"
            onClick={handleCapture}
            style={{ cursor: 'pointer'}} 
        />
    );
}

export default CaptureButton;