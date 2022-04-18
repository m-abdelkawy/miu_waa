import React from "react";

export const Pagethree = (props) => {

    const previousPage = () => {
        props.history.push("/pagetwo");
    }

    let page3 = (
        <>
            <h3>Page 3</h3>
            <br />
            <br />
            <table>
                <tr>
                    <th><button onClick={previousPage}>Previous</button></th>
                </tr>
            </table>
        </>
    );

    return page3;
}