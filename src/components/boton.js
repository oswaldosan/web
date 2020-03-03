import React, { useState } from 'react';

const Boton = () => {
     
    const [ clicks, setClicks] = useState('hola')
      
    return (
        <div>
            <button className="btn btn-light" onClick={() =>{setClicks(clicks + ' loco')}}>{clicks}</button>
        </div>
    )
}

export default Boton 