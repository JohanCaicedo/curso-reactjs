import React from 'react';
import './css/TodoSearch.css'



function TodoSearch(){
    
    const [searchValue, setSarchValu] = React.useState ("");
    
    return(
        
        <input 
        className='BotonSearch montserrat-300'
        placeholder="¿Que quieres buscar?"
        onChange={(event) => {
            console.log ("Escribiste en el TodoSearch");
        }
        }


        />
        
    );

}

export {TodoSearch}