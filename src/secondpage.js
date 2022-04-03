import React, {useState} from "react";
import './practice.css'

function Bots(){
    const [names,setNames]=useState('');

    const img_array=[
        '1.jpg', '2.jpg', '3.jpg','4.jpg'
    ]

            var random = Math.floor(Math.random()*img_array.lenght);

            var selected_img = img_array[random];


    return(
        <div className="container">
            <div className="header">
                <br></br>
               <h1> Hello there bots!</h1>
               <img id="img_display" src="img/1.jpg" height={400} width={400} />
            </div>

            <div className="leftbox">
            <div className="imag">
                    {
                        names?
                        <img id="img_display" src="img/1.jpg" height={400} width={400} />
                        : 'Click to get some funy pictures'
                    }
                </div>
                {
                    names ? 
                    <button onClick={()=>setNames('heh')} className="namebtn">HEHEHE</button>
                    : <button onClick={()=>setNames('heh')} className="namebtn">HAHA</button>

                }
            </div>
        </div>
    )
}

export default Bots;