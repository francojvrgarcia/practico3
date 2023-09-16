## Juego de Piedra, Papel o Tijera

Este es un juego simple de Piedra, Papel o Tijera desarrollado en React. A continuación, se proporciona una breve explicación sobre cómo jugar y los detalles de implementación.

### Cómo Jugar

1. Ingresa tu nombre en el campo correspondiente y selecciona la cantidad de jugadas que deseas realizar (de 1 a 5).

2. Haz clic en "Comenzar" para iniciar el juego.

3. Se mostrará un cuadro de diálogo con las opciones de jugada: Piedra, Papel y Tijera. Selecciona una de estas opciones haciendo clic en el botón correspondiente.

4. La computadora elegirá una jugada al azar.

5. El juego determinará el resultado de la ronda (Empate, Gana la Computadora o Gana el Jugador) y mostrará el resultado de la ronda actual.

6. Repite los pasos 3 a 5 hasta que hayas completado todas las rondas.

7. Después de la última ronda, se mostrarán los resultados finales, incluyendo la cantidad de rondas ganadas por la computadora, el jugador y el número de empates.

### Detalles de Implementación

El juego está implementado en React, un popular framework de JavaScript para crear interfaces de usuario interactivas. Aquí hay algunos detalles clave de la implementación:

1. **Componentes**: El juego utiliza varios componentes de React para organizar la interfaz de usuario de manera modular. Estos componentes incluyen `GameSettings`, `ResultadosIndividuales`, y `ResultadosFinales`.

2. **Estado del Juego**: Se utiliza el estado de React para rastrear información importante del juego, como el nombre del jugador, el número de jugadas, la jugada de la computadora, los resultados individuales y los resultados finales.

3. **Selección Aleatoria de la Computadora**: La computadora elige su jugada de manera aleatoria utilizando el método `obtenerJugadaComputadora`.

4. **Determinación del Ganador**: La lógica para determinar al ganador se encuentra en la función `determinarGanador`. Compara las jugadas del jugador y la computadora para determinar el resultado de cada ronda.

5. **Resultados Individuales**: Cada ronda del juego se registra en la lista de `resultadosIndividuales`, que luego se muestra al jugador.

6. **Resultados Finales**: Después de todas las rondas, se calculan los resultados finales, incluyendo la cantidad de rondas ganadas por el jugador, la computadora y los empates.

7. **Validación de Entrada**: Antes de comenzar el juego, se realizan comprobaciones para asegurarse de que el jugador haya ingresado su nombre y seleccionado un número válido de jugadas.

8. **Interfaz de Usuario Amigable**: La interfaz de usuario utiliza la biblioteca Bootstrap para estilizar los elementos y FontAwesome para mostrar íconos de piedra, papel y tijera.

En resumen, este juego de Piedra, Papel o Tijera es una implementación interactiva en React que permite a los jugadores competir contra la computadora y ver los resultados individuales y finales. ¡Diviértete jugando!