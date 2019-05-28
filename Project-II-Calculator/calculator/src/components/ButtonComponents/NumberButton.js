import React from 'react';
import './Button.css';

function NumberColumn1(props) {
    return(
        <div className="number-buttons">
            {props.numberProp.map(number => {
                return <div className="number">{number}</div>
            })}
        </div>
    );
}

function NumberColumn2(props) {
    return(
        <div className="number-buttons">
            {props.numberProp.map(number => {
                return <div className="number">{number}</div>
            })}
        </div>
    );
}

function NumberColumn3(props) {
    return(
        <div className="number-buttons">
            {props.numberProp.map(number => {
                return <div className="number">{number}</div>
            })}
        </div>
    );
}

function ZeroButton(props) {
    return(
        <div className="number-buttons">
            <div className="number">{props.numberProp}</div>
        </div>
    );
}

function NumberButtons() {
    return(
        <div className="number-pad">
            <NumberColumn1 numberProp={[1, 2, 3]} />
            <NumberColumn2 numberProp={[4, 5, 6]} />
            <NumberColumn3 numberProp={[7, 8, 9]} />
            <ZeroButton numberProp={0} />
        </div>
    );
}

export default NumberButtons;