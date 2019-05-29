import React from 'react';
import './Button.css';

function ClearButton(props) {
    return(
        <div className="clear-button">{props.clearText}</div>
    );
}

export default ClearButton;

