import React from 'react';
import './css/TodoSearch.css'



function TodoSearch({
    searchValue,
    setSearchValue,
}){
           
    return(
        
        <input 
        className='BotonSearch montserrat-300'
        placeholder="¿Que quieres buscar?"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);

        }
        }


        />
        
    );

}

export {TodoSearch}