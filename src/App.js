import React,{useState} from 'react';
import './App.css';
import UseLocalStorage from "./customhooks/UseLocalStorageState";
//import UseLocalStorageState from './customhooks/UseLocalStorageState';
function App() {
  const [contador,setcontador] = UseLocalStorage('contador',0);
  const [data,setData]=UseLocalStorage('data','a');
  const [numero,setNumero]= useState(0);
  //const [contador,setcontador] = UseLocalStorage('contador',0);
  return (
    <div className="App">
      <button onClick={()=>{setNumero(numero+1)}}>
        Numero
      </button>
      {numero}
        <button onClick={()=>setcontador(contador+1)}>
            Aumentar
        </button>
        <button onClick={()=>setcontador(contador-1)}>
            reducir
        </button>
        <button onClick={()=>setData(data+'a')}>
          adicionar  palabra
        </button>
        {contador}
        {data}
    </div>
  );
}

export default App;
