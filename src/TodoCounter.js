import './css/TodoCounter.css';
import './css/index.css'


function TodoCounter({total, complited}){
    return(
        <h1 className='catamaran-500 TodoCounter '>
        Has completado <span>{complited}</span> de <span>{total}</span> Todos FFFF
        </h1>
    );

}

export {TodoCounter}