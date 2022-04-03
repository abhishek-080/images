import React, { useState } from 'react'

function Stateprac(){
    const [status,setStatus]=useState(true);
    return(

        <div className="states">
            {
                status? <h1>Hello User</h1> :<h1>ohohoh</h1>
            }
                <button onClick={()=>setStatus(false)}>Hide</button>
                <button onClick={()=>setStatus(true)}>Show</button>

        </div>
    );
}

export default Stateprac;