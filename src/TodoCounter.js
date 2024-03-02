import './css/TodoCounter.css';


function TodoCounter({total, complited}){
    return(
        <h1>
        Has completado {complited} de {total} Todos
        </h1>
    );

}

export {TodoCounter}