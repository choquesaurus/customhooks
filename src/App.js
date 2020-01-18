import React,{useState} from 'react';
import './App.css';
import UseLocalStorage from "./customhooks/UseLocalStorageState";
import UseLocalStorageState2 from './customhooks/UseLocalStorageState2';
//import UseLocalStorageState from './customhooks/UseLocalStorageState';
function App() {
  const [contador,setcontador] = UseLocalStorage('contador',0);
  const [data,setData]=UseLocalStorage('data','a');
  const [caja,setCaja]=UseLocalStorage('caja','');
  const [numero,setNumero]= useState(0);
  // const [form,setFormData]=useState({
  //   nombre:'',
  //   apellido:'',
  //   edad:0,
  //   sexo:''
  // });
  const [formuser,setformuser]=UseLocalStorageState2('formuser',{
    nombre:'',
    apellido:'',
    edad:0,
    sexo:''
  })
  
  async function  Change (e){
   await setformuser({
      ...formuser,
      [e.target.name]:e.target.value
    });
    
  }
  const {nombre,apellido,edad,sexo}=formuser;
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
       
        <form>
          <input name='nombre' value={nombre}  onChange={Change} type='text'/>
          <input name='apellido' value={apellido} onChange={Change} type='text'/>
          <input name='edad' value={edad} onChange={Change} type='text'/>
          <input name='sexo' value={sexo} onChange={Change} type='text'/>    
          
   
        </form><br/>
        {nombre}
        {apellido}
        {edad}
        {sexo}
    </div>
  );
}

export default App;
