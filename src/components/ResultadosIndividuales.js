import React from 'react';

function ResultadosIndividuales({ resultadosIndividuales }) {
  // Invierte el arreglo para mostrar los resultados más recientes primero
  const resultadosInvertidos = [...resultadosIndividuales].reverse();

  return (
    <div>
      <h2>Resultados individuales</h2>
      {resultadosInvertidos.map((resultado, index) => (
        <div key={index} className="resultado-jugada">
          <div id="resultados">
            <p className="jugada-numero">Jugada {resultadosInvertidos.length - index}:</p>
            <p className="jugada-info">{resultado.jugador} eligió: {resultado.jugadaJugador}</p>
            <p className="jugada-info">La computadora eligió: {resultado.jugadaComputadora}</p>
            <p className="jugada-info">
              El resultado fue:{' '}
              <span className={resultado.resultado === 'Gana el jugador' ? 'ganador' : resultado.resultado === 'Gana la computadora' ? 'perdedor' : ''}>
                {resultado.resultado}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultadosIndividuales;
