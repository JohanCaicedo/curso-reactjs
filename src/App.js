import './App.css';
import React, { useState } from "react";

function App() {
  return (

    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      
       
    </div>
    
  );
}



function TodoItem(){
  return (
    <li>

      <span>🥩 Check</span>
      <p>Texto to do</p>
      <samn>🤦‍♂️ UnChek</samn>
    </li>
  )

}


export default App;
