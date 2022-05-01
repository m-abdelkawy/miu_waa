import React from 'react';

export const Pageone = (props) => {
    const nextPage=()=>{
        props.history.push('/pagetwo');
    }

    let page = (
        <div>
            <h3>Page 1</h3>
            <br/>
            <br/>
            <div>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );

    return page;
}