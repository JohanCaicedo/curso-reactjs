import '../styles/TodoCounter.css'
// import './css/index.css'


function TodoCounter({total, completed}){
    return(
        <h1 className='TodoCounter '>
        Has completado <span>{completed}</span> de <span>{total}</span> Todos
        </h1>
    );

}

export {TodoCounter}