import React from 'react';
import '../hojas-de-estilos/BotonClear.css'

// button is another option to use instead of div
// also we can use the text "clear" instead of {props.children} because in this case this will not change at all during his use

const BotonClear= (props) => (
    
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children} 
    </div>
);

export default BotonClear;