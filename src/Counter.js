import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {
    render() {
        // let randomNumber = Math.floor(Math.random() * (108
        //     - 1 + 1) + 1);
        return (
            <div className="counter">
                Counter:
                <span className="value">
                    {/* {randomNumber} */}
                    {this.props.initValue}
                </span>
            </div>

        )
    }
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108
//         - 1 + 1) + 1);
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//                 {/* {Math.floor(Math.random() * ( */}
//                 {/* 108 */}
//                 {/* - 1 + 1) + 1)} */}
//                 {/* dlaczego u mnie większa wartośc niz 108? */}
//             </span>
//         </div>
//     );
// }


// export default Counter;