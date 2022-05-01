import React from 'react';

export const Pagefour=(props)=>{
const previousPage=()=>{
    props.history.push("/pagethree");
}

let page=(
    <div>
        <h3>Page 4</h3>
        <br/>
        <br/>
        <div>
            <button onClick={previousPage}>Previous Page</button>
        </div>
    </div>
);

return page;
}