import React from "react";

const TopComponent = ({setMessageFunction})=>{
    const sayHello=()=>{
        setMessageFunction("Hello clicked!");        
    }

    const sayGoodbye=()=>{
        setMessageFunction("Goodbye Clicked!");
    }

    return(
        <div>
            <button onClick={sayHello}>Say Hello</button>
            <button onClick={sayGoodbye}>Say Goodbye</button>
        </div>
    );
}

export default TopComponent;