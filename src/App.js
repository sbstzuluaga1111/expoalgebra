import React from 'react';
import "./App.css"

const App = () => {
  const x = 24;
  const y = 48;
  const z = 12;

  return (
    <div className='App-header'>
      <div className='margen'>
        <h1>Grupo 12: </h1>
        <h2>Robinson Antonio Suarez Trujillo</h2>
        <h2>Sebastián Andrés Zuluaga Salgado</h2>

        <img className='imagen' src='./problema12.jpg' alt=''></img>

      <h2>Solución del ejercicio de tiquetes usando eliminación Gaussiana</h2>

      <h3>1. Análisis del enunciado</h3>
      <p>
        A partir del enunciado, obtenemos tres ecuaciones:
      </p>
      <ul>
        <li>
          <strong>Primera ecuación:</strong> El total de tiquetes vendidos es 60, lo que significa que los tiquetes vendidos a Cartagena (x), San Andrés (y) y Santa Marta (z) suman:
          <pre>x + y + z = 60</pre>
        </li>
        <li>
          <strong>Segunda ecuación:</strong> Los tiquetes vendidos para San Andrés son el doble de los vendidos a Cartagena y Santa Marta. Esto se representa como:
          <pre>y = 2(x + z)</pre>
          Reordenado:
          <pre>-2x + y - 2z = 0</pre>
        </li>
        <li>
          <strong>Tercera ecuación:</strong> Los tiquetes vendidos para Santa Marta son la mitad de los vendidos a Cartagena más ocho:
          <pre>z = (x / 2) + 8</pre>
          Multiplicamos por 2 para eliminar la fracción:
          <pre>-x + 2z = 16</pre>
        </li>
      </ul>

      <h3>2. Sistema de ecuaciones</h3>
      <p>El sistema de ecuaciones queda así:</p>
      <pre>
        {`x + y + z = 60
-2x + y - 2z = 0
-x + 2z = 16`}
      </pre>

      <h3>3. Matriz aumentada inicial</h3>
      <pre>
        {`[  1   1   1  |  60 ]
[ -2   1  -2  |   0 ]
[ -1   0   2  |  16 ]`}
      </pre>

      <h3>4. Primer paso: eliminación de x en la segunda y tercera fila</h3>
      <p>
        Para eliminar el término \(x\) de las filas 2 y 3, realizamos las siguientes operaciones:
      </p>
      <ul>
        <li className='blanco'>
          Fila 2: \(F2 + 2 \times F1 → F2\)
          <p>
            <strong>Operación:</strong> Multiplicamos la fila 1 por 2 y la sumamos a la fila 2:
            <pre>
              Fila 1: 2 × (1, 1, 1, |, 60) = (2, 2, 2, |, 120)
            </pre>
            Sumamos el resultado a la fila 2:
            <pre>
              (-2, 1, -2, |, 0) + (2, 2, 2, |, 120) = (0, 3, 0, |, 120)
            </pre>
            Nueva fila 2:
            <pre>[ 0   3   0  |  120 ]</pre>
          </p>
        </li>
        <li className='blanco'>
          Fila 3: \(F3 + F1 → F3\)
          <p>
            <strong>Operación:</strong> Sumamos la fila 1 a la fila 3:
            <pre>
              Fila 1: (1, 1, 1, |, 60)
            </pre>
            Sumamos el resultado a la fila 3:
            <pre>
              (-1, 0, 2, |, 16) + (1, 1, 1, |, 60) = (0, 1, 3, |, 76)
            </pre>
            Nueva fila 3:
            <pre>[ 0   1   3  |  76 ]</pre>
          </p>
        </li>
      </ul>

      <h3>Matriz resultante después del primer paso</h3>
      <pre>
        {`[  1   1   1  |  60 ]
[  0   3   0  | 120 ]
[  0   1   3  |  76 ]`}
      </pre>

      <h3>5. Segundo paso: eliminación de y en la tercera fila</h3>
      <p>
        Ahora eliminamos el término \(y\) de la tercera fila. Para esto, realizamos la operación:
      </p>
      <ul>
        <li className='blanco'>Fila 3: \(F3 - (1/3) \times F2 → F3\) 
        <p>
        <strong>Operación:</strong> Multiplicamos la fila 2 por \(1/3\) y la restamos de la fila 3:
        <pre>
          Fila 2: (0, 3, 0, |, 120) × 1/3 = (0, 1, 0, |, 40)
        </pre>
        Restamos el resultado a la fila 3:
        <pre>
          (0, 1, 3, |, 76) - (0, 1, 0, |, 40) = (0, 0, 3, |, 36)
        </pre>
        Nueva fila 3:
        <pre>[ 0   0   3  |  36 ]</pre>
      </p></li>
      </ul>
     

      <h3>Matriz resultante después del segundo paso</h3>
      <pre>
        {`[  1   1   1  |  60 ]
[  0   3   0  | 120 ]
[  0   0   3  |  36 ]`}
      </pre>

      <h3>6. Solución final: obtener los valores de z, y y x</h3>
      <div className='blanco'>
      <p>Dividimos la tercera fila entre 3 para obtener \(z\):</p>
      <pre>z = 36 / 3 = 12</pre>

      <p>
        Usamos el valor de \(z = 12\) en la segunda fila para encontrar \(y\):
      </p>
      <pre>3y = 120 → y = 120 / 3 = 40</pre>

      <p>
        Finalmente, sustituimos \(y = 40\) y \(z = 12\) en la primera ecuación para encontrar \(x\):
      </p>
      <pre>x + 40 + 12 = 60 → x = 60 - 52 = 24</pre>
</div>
      <h4>Resultados finales:</h4>
      <p><strong>Cartagena (x):</strong> {x} tiquetes vendidos</p>
      <p><strong>San Andrés (y):</strong> {y} tiquetes vendidos</p>
      <p><strong>Santa Marta (z):</strong> {z} tiquetes vendidos</p>
    </div>
    
    
    <div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Gracias por su atencion...</div>
</div>
    
    
    
    
    
    
    </div>
  );
};

export default App;
