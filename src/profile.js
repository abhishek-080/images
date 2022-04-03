import React,{useState, useEffect} from "react";

function User(props) {
    useEffect(() => {
        console.log("useEffect")   
      },[props.data])
    useEffect(() => {
        alert("the count is" + props.count +1)
       
    }, [props.count])

    return(
        <div>
            <h1>count props:{props.count} </h1>
            <h1>data props:{props.data} </h1>
        </div>
    )
}

export default User;
