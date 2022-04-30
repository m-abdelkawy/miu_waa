import React from "react";

const ButtonComponent = (props) =>{

    const alertMessage=(message)=>{
        alert(message);
    }

    let buttonComponent = (
        <div>
            <button onClick={()=>alertMessage(props.message)}>Say {props.message}</button>
        </div>
    );

    return buttonComponent;
    
}

export default ButtonComponent;