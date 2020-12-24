import React from 'react';
import './Number.css';

const Number = props => {
    return (
        <div className="Number">
            <h2>{props.value}</h2>
        </div>
    );
};

export default Number;