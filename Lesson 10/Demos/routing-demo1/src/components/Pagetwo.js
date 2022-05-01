import React from 'react';

export const Pagetwo = (props) => {
    const previousPage = () => {
        props.history.push("/pageone");
    }
    const nextPage = () => {
        props.history.push("/pagethree");
    }

    let page = (
        <div>
            <h3>Page 2</h3>
            <br />
            <br />
            <div>
                <button onClick={previousPage}>Previous page</button>
                <button onClick={nextPage}>Next page</button>
            </div>
        </div>
    );

    return page;
}