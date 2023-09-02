import React from 'react';

function ResultadosIndividuales({ resultadosIndividuales }) {
  return (
    <div>
      <h2>Resultados individuales</h2>
      {resultadosIndividuales.map((resultado, index) => (
        <div key={index} className="resultado-jugada">
          <div id="resultados">
            <p className="jugada-numero">Jugada {index + 1}:</p>
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