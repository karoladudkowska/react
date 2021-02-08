import React from 'react';
import './Counter.css';



function Counter(props) {

    let randomNumber = Math.floor(Math.random() * (108
        - 1 + 1) + 1);
    return (
        <div className="counter">
            Counter:
            <span className="value">
                108
{/* {Math.floor(Math.random() * (108 */}
                {/* - 1 + 1) + 1)} */}
                {/* w nawiasach klamrowych kod js/ dlaczego u mnie większa wartośc niz 108? */}
            </span>
        </div>
    );
}


export default Counter;