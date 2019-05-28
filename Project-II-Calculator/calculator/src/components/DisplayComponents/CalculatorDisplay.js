import React from 'react';
import './Display.css';

import ClearButton from "../ButtonComponents/ActionButton"
import OperatorButton from "../ButtonComponents/Operators.js"
import NumberButtons from "../ButtonComponents/NumberButton"

function CalculatorContainer() {
    return(
        <div className="container">
            <ReadoutDisplay numberProp={0} />
            <ButtonContainer />
        </div>

    );
}

export default CalculatorContainer;

function ReadoutDisplay(props) {
    return(
        <div className="readout">{props.numberProp}</div>
    );
}

function ButtonContainer(props) {
    return(
        <div className="button-container">
            <div className="left-buttons">
                <ClearButton clearText={"clear"} />
                <NumberButtons />
            </div>
            <div className="right-buttons">
                <OperatorButton />
            </div>
        </div>
    );
}
