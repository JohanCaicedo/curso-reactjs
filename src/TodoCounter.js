import './css/TodoCounter.css';
import './css/index.css'



function TodoCounter({total, completed}){
    




    return(
        <>
        <h1 className='catamaran-500 TodoCounter '>
        Has completado <span>{completed}</span> de <span>{total}</span> Todos
        </h1>
        </>
    );

}

export {TodoCounter}