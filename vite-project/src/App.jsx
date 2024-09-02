// import React from 'react';
// import './App.css';
// import MinimalImage from './imagen/minimal.jpg';

// // App.jsx
// function App() {
//     function handleButtonClick() {
//         alert('weenaa');
//         window.open('https://www.youtube.com/watch?v=CuOtCCZS-q4', '_blank');
//     }

//     return (
//         <div className="container">
//             <header>
//                 <h1 id="titulo">Radio de Chile</h1>
//             </header>

//             <div className="main-content">
//                 <hr />
//                 <p className="texto">Este es mi primer componente en React</p>
//                 {/* Este es un comentario en JSX */}
//                 <p>
//                     Este <br />
//                     párrafo <span style={{ color: 'blue' }}>contiene una etiqueta</span> span
//                 </p>
//                 {/* Ahora haré una etiqueta de hipervínculo */}
//                 <a href="https://www.youtube.com/watch?v=CuOtCCZS-q4">Ir a Youtube</a>
//                 {/* Ahora en otra pestaña */}
//                 <br />
//                 <p>
//                     Este Hipervínculo de abajo me llevará a Lofi pero en otra pestaña
//                 </p>
//                 <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=CuOtCCZS-q4">Ir a Lofi</a>

//                 <p>Ahora voy a mostrar una imagen</p>
//                 {/* Ahora voy a hacer botones */}
//                 <button type="button" onClick={handleButtonClick}>BOTÓN</button>
//                 <br /> <br />
//                 <img src={MinimalImage} alt="Minimal" width={400} height={200} />
//             </div>
//         </div>
//     );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import MinimalImage from './imagen/minimal.jpg';

function App() {
    const [radios, setRadios] = useState([]);

    useEffect(() => {
        // URL de la API
        const url = 'https://api.boostr.cl/radios.json';
        
        // Opciones de la solicitud
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };

        // Hacer la solicitud a la API
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setRadios(json.data); // Ajusta según la estructura de tu JSON
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }, []); // Ejecuta solo una vez cuando el componente se monta

    return (
        <div className="container">
            <header>
                <h1 id="titulo">Radio de Chile</h1>
            </header>

            <div className="main-content">
                <hr />
                
    
                <img src={MinimalImage} alt="Minimal" width={500} height={200} />
               
                <hr />

                <h2>Radios en Línea</h2>
                <div className="radio-list">
                    {radios.length > 0 ? (
                        radios.map((radio, index) => (
                            <div key={index} className="radio-item">
                                <a href={radio.url} target="_blank" rel="noopener noreferrer">
                                    <img src={radio.image["200"]} alt={radio.name} />
                                    <h3>{radio.name}</h3>
                                </a>
                                <audio controls>
                                    <source src={radio.stream} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ))
                    ) : (
                        
                        <p>No se encontraron radios.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
