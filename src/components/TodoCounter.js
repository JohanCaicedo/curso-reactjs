import React from 'react';
import '../styles/TodoCounter.css';
import '../index.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      {completed === total ? (
        <h1 className='catamaran-500 TodoCounter'>
          ¡Felicidades! has completado todas tus tareas pendientes
        </h1>
      ) : (
        <h1 className='catamaran-500 TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> Todos
        </h1>
      )}
    </>
  );
}

export { TodoCounter };











// import './css/TodoCounter.css';
// import './css/index.css'



// function TodoCounter({total, completed}){
    




//     return(
//         <>
//         <h1 className='catamaran-500 TodoCounter '>
//         Has completado <span>{completed}</span> de <span>{total}</span> Todos
//         </h1>
//         </>
//     );

// }

// export {TodoCounter}