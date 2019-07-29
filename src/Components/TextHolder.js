import React from 'react';

const TextHolder = (props) => {
    return (
        <div className={props.className} >
            <h1>{props.sectionTitle}</h1>
            <p>This is a place for the output text</p>
        </div>
    )
}

export default TextHolder;
