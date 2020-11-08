import React,{useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const[restult,setrestult]=useState('');
  function call(e) {
    setrestult(restult.concat(e.target.name));
    
  }
  function clear()
  {
    setrestult("");

  }
  function calculate() {
    try {
      setrestult(eval(restult).toString());
    } catch (error) {
      setrestult("Error");
    }
  }
  return (
    <div className="App">
    
    <center id="b">
<input type ="text"  value={restult} id="input"/><br/>

<button name="1" onClick={call}>1</button>
<button   name="2" onClick={call}>2</button>
<button  name="3" onClick={call}>3</button>
<button   name="+" onClick={call}>+</button><br/>


<button  name="4" onClick={call}>4</button>
<button  name="5" onClick={call}>5</button>
<button  name="6" onClick={call}>6</button>
<button   name="-" onClick={call}>-</button><br/>

<button  name ="7" onClick={call}>7</button>
<button  name="8" onClick={call}>8</button>
<button  name="9" onClick={call}>9</button>
<button  name="*" onClick={call}>*</button><br/>

<button onClick={clear}>c</button>
<button  name="/" onClick={call}>/</button>
<button onClick={calculate} >=</button><br/>

</center>    
    </div>
  );
}

export default App;
