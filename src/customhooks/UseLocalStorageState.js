import {useState} from 'react';
export default function useLocalStorageState(key,initialvalue){   
    const [value,setValue] = useState(()=>{
        try {
            return window.localStorage.getItem(key)
            ?JSON.parse(window.localStorage.getItem(key)):initialvalue;            
        } catch (error) {
            console.error(error);
        }
    });
    const StoreValue=item=>
    {
        try {
            setValue(item);
            window.localStorage.setItem(key,JSON.stringify(item));
        } catch (error) {
            console.log(error);
        }      
    }
    return [value,StoreValue];
}

