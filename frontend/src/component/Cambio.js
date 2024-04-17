import Registro from './Registro';
import Usuarios from './Usuarios';
import {useState} from 'react';
import { Button} from 'react-bootstrap';

function Cambio(){
    const [
        uno, dos
    ]
    =useState(false);
    function Click(e){
        dos(e=true)
    }
    return(
        
        uno?
        <div>
            
            <Registro />
        </div>
        : <div>
        <Button onClick={Click}>
                Agregar Usuario
            </Button>
        <Usuarios />
    </div>
    );
}

export default Cambio