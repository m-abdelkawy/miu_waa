import React from 'react';

export const Pagethree = (props) => {
    const previousPage = () => {
        props.history.push("/pagetwo");
    }
    const nextPage = () => {
        props.history.push("/pagefour");
    }
    let page = (
        <div>
            <h3>Page 3</h3>
            <br />
            <br />
            <div>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
    return page;
}