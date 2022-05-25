import React from "react";
import {useStorageListener} from './useStorageListener'

function ChangeAlert(){
    const {show, toggleShow} = useStorageListener();

    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la informacion</button>
            </div>
        )    
    }else{
        return null;
    }
}

export {ChangeAlert};