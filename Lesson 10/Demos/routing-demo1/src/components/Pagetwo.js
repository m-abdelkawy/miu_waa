import React from "react";

export const Pagetwo =(props)=>{

    const nextPage = ()=>{
        props.history.push("/pagethree");
    }

    const previousPage = () =>{
        props.history.push("/pageone");
    }

    let page2 = (
        <>
        <h3>Page 2</h3>
        <br/>
        <br/>
        <table>
            <tr>
                <th><button onClick={previousPage}>Previous</button></th>
                <th><button onClick={nextPage}>Next</button></th>
            </tr>
        </table>
        </>
    );

    return page2;
}