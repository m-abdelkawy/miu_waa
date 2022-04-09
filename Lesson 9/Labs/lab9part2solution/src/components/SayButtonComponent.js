import React from "react";

const SayButtonComponent = (prop) =>{

    const {text, message} = prop;
    const sayHello = ()=>{
        alert(prop.message);
    }

    return (
        <div>
            <button onClick={sayHello}>{prop.text}</button>
        </div>
    );
}

export default SayButtonComponent;