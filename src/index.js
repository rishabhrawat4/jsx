import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
    return "Click Me!"
}
const App = function () {
    const buttonText = "Click Me!";
    const labelText = "Enter Name: "
    
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="test" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{ getButtonText() }</button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);