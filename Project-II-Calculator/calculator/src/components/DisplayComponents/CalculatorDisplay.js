import React from 'react';
import './Display.css';

import ClearButton from "../ButtonComponents/ActionButton"
import OperatorButton from "../ButtonComponents/Operators"

function CalculatorContainer() {
    return(
        <div className="container">
            <ReadoutDisplay />
            <ButtonContainer />
        </div>

    );
}

export default CalculatorContainer;

function ReadoutDisplay() {
    return(
        <div className="readout">0</div>
    );
}

function ButtonContainer() {
    return(
        <div>
            <ClearButton />
            <OperatorButton />
        </div>
    );
}
