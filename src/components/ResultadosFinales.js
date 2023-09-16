import React from 'react';

function ResultadosFinales({ resultadosFinales, nombreJugador }) {
  return (
    <div id="resultados-finales">
      <h1>Resultados finales</h1>
      <p className="resultado-final">Computadora: {resultadosFinales.ganadasComputadora} jugada(s) ganada(s)</p>
      <p className="resultado-final">{nombreJugador}: {resultadosFinales.ganadasJugador} jugada(s) ganada(s)</p>
      <p className="resultado-final">Empates: {resultadosFinales.empates} jugada(s)</p>
    </div>
  );
}

export default ResultadosFinales;
