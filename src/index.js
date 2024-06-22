import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Array de objetos con títulos y textos
const textos = [
  {
    titulo: "Malaquías 3:10",
    texto: "Traigan el diezmo completo al almacén, para que haya alimento en mi casa. Por favor, pónganme a prueba en esto —dice Jehová de los ejércitos— y verán que les abro las compuertas de los cielos y derramo sobre ustedes bendiciones hasta que no les falte nada"
  },
  {
    titulo: "1 Samuel 17:45",
    texto: "Y David le contestó al filisteo: “Tú vienes a pelear conmigo con una espada, una lanza y una jabalina, pero yo voy a pelear contigo en el nombre de Jehová de los ejércitos, el Dios de las tropas de Israel, a quien tú has desafiado."
  },
  {
    titulo: "Eclesiastés 12:13, 14",
    texto: "Después de oírlo todo, la conclusión es esta: teme al Dios verdaderor y obedece sus mandamientos, porque eso es todo lo que el hombre debe hacer. Porque el Dios verdadero juzgará todas las acciones, incluso todas las cosas ocultas, para determinar si son buenas o malas."
  },
  {
    titulo: "Juan 6:68",
    texto: "Simón Pedro le contestó: “Señor, ¿a quién vamos a acudir? Tú tienes palabras de vida eterna"
  },
  {
    titulo: "Juan 11:25",
    texto: "Jesús le dijo: “Yo soy la resurrección y la vida. El que demuestre fe en mí, aunque muera, llegará a vivir;"
  },
  {
    titulo: "Juan 21:25",
    texto: "De hecho, Jesús hizo muchas otras cosas que, si alguna vez se escribieran en detalle, supongo que el mundo mismo no podría contener los rollos que se escribirían."
  },
  {
    titulo: "Isaías 1:18",
    texto: "“Vengan y arreglemos las cosas entre nosotros”, dice Jehová. “Aunque los pecados de ustedes sean como rojo escarlata, quedarán blancos como la nieve; aunque sean rojos como la tela carmesí, se volverán como la lana."
  }
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App textos={textos} />
  </React.StrictMode>
)