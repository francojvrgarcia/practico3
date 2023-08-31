import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const opciones = ['piedra', 'papel', 'tijera'];
const resultados = ['Empate', 'Gana la computadora', 'Gana el jugador'];

function App() {
  const [nombreJugador, setNombreJugador] = useState('');
  const [numJugadas, setNumJugadas] = useState(0);
  const [jugadaComputadora, setJugadaComputadora] = useState('');
  const [jugadaJugador, setJugadaJugador] = useState('');
  const [ganadorComputadora, setGanadorComputadora] = useState(0);
  const [ganadorJugador, setGanadorJugador] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [jugadasRealizadas, setJugadasRealizadas] = useState(0);
  const [resultadosDiv, setResultadosDiv] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleStartClick = () => {
    if (nombreJugador === '') {
      alert('Ingresa tu nombre antes de comenzar.');
      return;
    }

    if (isNaN(numJugadas) || numJugadas < 1 || numJugadas > 5) {
      alert('Cantidad de jugadas inválida. Debes ingresar un número válido (1, 2, 3, 4, o 5).');
      return;
    }

    setJugadasRealizadas(0);
    setGanadorComputadora(0);
    setGanadorJugador(0);
    setEmpates(0);
    setResultadosDiv([]);
    setModalVisible(true);
    setOptionsVisible(true);
  };

  const handleOptionClick = (opcion) => {
    setJugadaJugador(opcion);
    setJugadaComputadora(opciones[obtenerJugadaComputadora()]);
    const resultado = determinarGanador(
      opciones.indexOf(jugadaComputadora),
      opciones.indexOf(opcion)
    );

    const resultadoDiv = (
      <div key={jugadasRealizadas} className="resultado-jugada">
        <div id="resultados">
          <p className="jugada-numero">Jugada {jugadasRealizadas + 1}:</p>
          <p className="jugada-info">{nombreJugador} eligió: {jugadaJugador}</p>
          <p className="jugada-info">La computadora eligió: {jugadaComputadora}</p>
          <p className="jugada-info">
            El resultado fue:{' '}
            <span className={resultado === 'Gana el jugador' ? 'ganador' : resultado === 'Gana la computadora' ? 'perdedor' : ''}>
              {resultado}
            </span>
          </p>
        </div>
      </div>
    );

    setResultadosDiv((prevResultados) => [...prevResultados, resultadoDiv]);

    if (resultado === resultados[1]) {
      setGanadorComputadora((prev) => prev + 1);
    } else if (resultado === resultados[2]) {
      setGanadorJugador((prev) => prev + 1);
    } else {
      setEmpates((prev) => prev + 1);
    }

    setJugadasRealizadas((prev) => prev + 1);

    if (jugadasRealizadas + 1 === numJugadas) {
      const resultadosFinalesDiv = (
        <div key="resultados-finales" id="resultados-finales">
          <h2>Resultados finales</h2>
          <p className="resultado-final">Computadora: {ganadorComputadora} jugada(s) ganada(s)</p>
          <p className="resultado-final">{nombreJugador}: {ganadorJugador} jugada(s) ganada(s)</p>
          <p className="resultado-final">Empates: {empates} jugada(s)</p>
        </div>
      );

      setResultadosDiv((prevResultados) => [...prevResultados, resultadosFinalesDiv]);
      //setModalVisible(false);
      setOptionsVisible(false);
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

  return (
    <div className="container text-center">
      <h1 className="my-4">Juego de piedra, papel o tijera</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
          <label htmlFor="nombreJugador">Ingresa tu nombre:</label>
          <input
            type="text"
            id="nombreJugador"
            className="form-control mb-3"
            value={nombreJugador}
            onChange={(e) => setNombreJugador(e.target.value.trim())}
          />
          <label htmlFor="numJugadas">Elige la cantidad de jugadas:</label>
          <input
            type="number"
            id="numJugadas"
            className="form-control mb-3"
            min="1"
            max="5"
            value={numJugadas}
            onChange={(e) => setNumJugadas(parseInt(e.target.value))}
          />
          <div className="d-flex flex-column">
            <button
              id="startButton"
              className="btn btn-primary btn-block"
              onClick={handleStartClick}
              disabled={modalVisible}
            >
              Comenzar
            </button>
            <button
              id="resetButton"
              className="btn btn-secondary btn-block mt-3"
              onClick={() => {
                setNombreJugador('');
                setNumJugadas(0);
                setJugadasRealizadas(0);
                setGanadorComputadora(0);
                setGanadorJugador(0);
                setEmpates(0);
                setResultadosDiv([]);
                setModalVisible(false);
              }}
            >
              Reiniciar Juego
            </button>
          </div>
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
                  {optionsVisible && ( <div className="modal-body">
                    <p>Selecciona una opción:</p>
                    {opciones.map((opcion, index) => (
                      <button
                        key={index}
                        className="btn btn-secondary optionButton"
                        data-choice={opcion}
                        onClick={() => handleOptionClick(opcion)}
                      >
                        {opcion === 'piedra' && <i className="fas fa-hand-rock"></i>}
                        {opcion === 'papel' && <i className="fas fa-hand-paper"></i>}
                        {opcion === 'tijera' && <i className="fas fa-hand-scissors"></i>}
                        {opcion}
                      </button>
                    ))}
                  </div>
                  )}

                  <div className="mt-4">
                        {resultadosDiv.map((resultadoDiv) => resultadoDiv)}
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
