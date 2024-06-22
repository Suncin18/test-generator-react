import { useState } from 'react';
import './App.css';

function App({textos}) {

  const [header, setHeader] = useState("Malaquías 3:10");
  const [body, setBody] = useState("Traigan el diezmo completo al almacén, para que haya alimento en mi casa. Por favor, pónganme a prueba en esto —dice Jehová de los ejércitos— y verán que les abro las compuertas de los cielos y derramo sobre ustedes bendiciones hasta que no les falte nada");

  const generarTexto = () => {
    const randomIndex = Math.floor(Math.random() * textos.length);
    const textoAleatorio = textos[randomIndex];
    setHeader(textoAleatorio.titulo);
    setBody(textoAleatorio.texto);
  };

  return (
    <div className="container col-12">
      <div className="card my-5 text-white border">
        {/* Utilizar el contenido de las props para el card-header */}
        <div className="card-header">{header}</div>
        {/* Utilizar el contenido de las props para el card-body */}
        <div className="card-body">{body}</div>
        <div className="card-footer d-grid">
          <button className="btn btn-secondary" onClick={generarTexto}>Generar Texto</button>
        </div>
      </div>
    </div>
  );
}

export default App;
