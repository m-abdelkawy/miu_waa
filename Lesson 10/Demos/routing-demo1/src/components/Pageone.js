import React from "react";

export const Pageone =(props)=>{

    const nextPage = ()=>{
        props.history.push("/pagetwo");
    }

    let page1 = (
        <>
        <h3>Page 1</h3>
        <br/>
        <br/>
        <table>
            <tr>
                <th><button onClick={nextPage}>Next</button></th>
            </tr>
        </table>
        </>
    );

    return page1;
}