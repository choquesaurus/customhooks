import {useState} from 'react';
export default function UseLocalStorageState2(key,initialvalue){
    
    const [value,setValue]=useState(()=>{
        try {
            let objeto = window.localStorage.getItem(key); 
             return objeto?JSON.parse(objeto):initialvalue;      
        } catch (error) {
            console.log(error);
        }
    });
    const SetObjectState=item=>
    {
        try {
            
           setValue(item);
            window.localStorage.setItem(key,JSON.stringify(item));
            console.log(item);
        } catch (error) {
            console.log(error)       
        }

    }
    return [value,SetObjectState]
}

