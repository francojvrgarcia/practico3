import React, { useState } from 'react';

const GameSettings = ({
  onStartGame,
  nombreJugador,
  setNombreJugador,
  numJugadas,
  setNumJugadas,
  modalVisible,
}) => {
  const handleStartClick = () => {
    if (nombreJugador === '') {
      alert('Ingresa tu nombre antes de comenzar.');
      return;
    }

    if (isNaN(numJugadas) || numJugadas < 1 || numJugadas > 5) {
      alert('Cantidad de jugadas inválida. Debes ingresar un número válido (1, 2, 3, 4, o 5).');
      return;
    }

    onStartGame();
  };

  return (
    <div>
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
      </div>
    </div>
  );
};

export default GameSettings;
