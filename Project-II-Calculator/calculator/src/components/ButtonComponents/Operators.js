import React from 'react';
import './Button.css';

function OperatorButton() {
    return(
        <div className="operator-box">
            <div className="operator-button">&divide;</div>
            <div className="operator-button">&times;</div>
            <div className="operator-button">&minus;</div>
            <div className="operator-button">+</div>
            <div className="operator-button">=</div>
        </div>
    );
}

export default OperatorButton;