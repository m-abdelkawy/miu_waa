import React from "react";

const Result = (props) => {
    const result = props.location.state.result;
    let page = (
        <div>
            <div id="result">
                {result}
            </div>
        </div>
    );

    return page;
}

export default Result;