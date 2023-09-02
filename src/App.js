import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import GameSettings from './components/GameSettings';
import ResultadosIndividuales from './components/ResultadosIndividuales'; // Importa el componente de resultados individuales
import ResultadosFinales from './components/ResultadosFinales'; // Importa el componente de resultados finales


const opciones = ['piedra', 'papel', 'tijera'];
const resultados = ['Empate', 'Gana la computadora', 'Gana el jugador'];

function App() {
  const [nombreJugador, setNombreJugador] = useState('');
  const [numJugadas, setNumJugadas] = useState(0);
  const [jugadaComputadora, setJugadaComputadora] = useState('');
  const [jugadasRealizadas, setJugadasRealizadas] = useState(0);
  const [resultadosIndividuales, setResultadosIndividuales] = useState([]);
  const [resultadosFinales, setResultadosFinales] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

 
  const handleOptionClick = (opcion) => {

      setJugadaComputadora(opciones[obtenerJugadaComputadora()]);
      const resultado = determinarGanador(
        opciones.indexOf(jugadaComputadora),
        opciones.indexOf(opcion)
      );

      // Guarda cada resultado individual en un objeto
      const resultadoJugada = {
        jugador: nombreJugador,
        jugadaJugador: opcion,
        jugadaComputadora: jugadaComputadora,
        resultado: resultado,
      };

      // Actualiza el estado con los resultados individuales de cada jugada
      setResultadosIndividuales((prevResultados) => [...prevResultados, resultadoJugada]);

 
      setJugadasRealizadas((prev) => prev + 1);

      if (jugadasRealizadas === numJugadas - 1) { // Verifica si es la última jugada antes de mostrar resultados finales
        setOptionsVisible(false);
      }

      if (jugadasRealizadas === numJugadas - 1) { // Calcula los resultados finales después de la última jugada
        const resultadoUltimaJugada = {
          jugador: nombreJugador,
          jugadaJugador: opcion,
          jugadaComputadora: jugadaComputadora,
          resultado: resultado,
        };
        
        // Calcula los resultados finales y guárdalos en estado, incluyendo la última jugada
        const resultadosFinales = calcularResultadosFinales([...resultadosIndividuales, resultadoUltimaJugada]);
        setResultadosFinales(resultadosFinales);
      }
  };

  const obtenerJugadaComputadora = () => {
    return Math.floor(Math.random() * 3);
  };

  const determinarGanador = (jugadaComputadora, jugadaJugador) => {
    if (jugadaComputadora === jugadaJugador) {
      return resultados[0]; // Empate
    } else if (
      (jugadaComputadora === 0 && jugadaJugador === 2) ||
      (jugadaComputadora === 1 && jugadaJugador === 0) ||
      (jugadaComputadora === 2 && jugadaJugador === 1)
    ) {
      return resultados[1]; // Gana la computadora
    } else {
      return resultados[2]; // Gana el jugador
    }
  };

  // Función para calcular los resultados finales
  const calcularResultadosFinales = (resultadosIndividuales) => {
    let ganadasComputadora = 0;
    let ganadasJugador = 0;
    let empates = 0;
  
    resultadosIndividuales.forEach((resultado) => {
      if (resultado.resultado === resultados[1]) {
        ganadasComputadora++;
      } else if (resultado.resultado === resultados[2]) {
        ganadasJugador++;
      } else {
        empates++;
      }
    });
  
    return {
      ganadasComputadora,
      ganadasJugador,
      empates,
    };
  };
  
  return (
    <div className="container text-center">
      <h1 className="my-4">Juego de piedra, papel o tijera</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
        <GameSettings
          onStartGame={() => {
            if (nombreJugador === '') {
              alert('Ingresa tu nombre antes de comenzar.');
              return;
            }

            if (isNaN(numJugadas) || numJugadas < 1 || numJugadas > 5) {
              alert('Cantidad de jugadas inválida. Debes ingresar un número válido (1, 2, 3, 4, o 5).');
              return;
            }

            setJugadasRealizadas(0);
            setResultadosIndividuales([]);
            setResultadosFinales([]);
            setModalVisible(true);
            setOptionsVisible(true);
            setJugadaComputadora(opciones[obtenerJugadaComputadora()]);
          }}
          nombreJugador={nombreJugador}
          setNombreJugador={setNombreJugador}
          numJugadas={numJugadas}
          setNumJugadas={setNumJugadas}
          modalVisible={modalVisible}
        />
          {modalVisible && (
            <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="jugadaModalLabel">Elige tu jugada</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setModalVisible(false)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {optionsVisible && (
                    <div className="modal-body">
                      <p>Selecciona una opción:</p>
                      {opciones.map((opcion, index) => (
                        <button
                          key={index}
                          className="btn btn-secondary optionButton m-2"
                          data-choice={opcion}
                          onClick={() => handleOptionClick(opcion)}
                        >
                          {opcion === 'piedra' && <i className="fa fa-hand-rock-o m-1"></i>}
                          {opcion === 'papel' && <i className="fa fa-hand-paper-o m-1"></i>}
                          {opcion === 'tijera' && <i className="fa fa-hand-scissors-o m-1"></i>}
                          {opcion}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-4">
                  {/* Utiliza el componente de resultados individuales */}
                  <ResultadosIndividuales resultadosIndividuales={resultadosIndividuales} />

                  {/* Utiliza el componente de resultados finales */}
                  {resultadosFinales && (
                    <ResultadosFinales resultadosFinales={resultadosFinales} nombreJugador={nombreJugador} />
                  )}
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
