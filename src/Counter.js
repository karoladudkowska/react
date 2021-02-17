import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import Clockfunctional from './Clockfunctional';
import Step from './Step';

class Counter extends Component {

    // let randomNumber = Math.floor(Math.random() * (108
    //     - 1 + 1) + 1);

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 3,
        };
    }



    changeValue = (action) => {
        // console.log(action);
        // zamiast objektu  jak zakomentowany przkażemy funkcje która zróci objekt naszego stanu

        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;

            }

            else {
                currentCounterValue = 0;

            }
            return (
                {
                    counterValue:
                        currentCounterValue
                });

        });
    }


    // this.setState({
    //     counterValue: currentCounterValue
    //     // (objekt z polem counterValuektóre już isniało i z nową wartością)
    // });
    // }

    setStepValue = (inputValue) => {

        this.setState({ stepValue: parseFloat(inputValue) })
    }

    buttonStepMethod = () => {

        this.setState((prevState) => {
            // let currentCounterValue = prevState.counterValue;
            // currentCounterValue += this.state.stepValue;

            return ({ counterValue: prevState.counterValue + this.state.stepValue });

        });
    }


    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }

    render() {

        let clockElement = '';
        if (this.state.showClock) {
            // clockElement = <Clock
            //     toggleClockMethod={this.toggleClock} />;
            clockElement = <Clockfunctional
                toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show Clock</span>;
        }


        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                {clockElement}
                <Step buttonStepMethod={this.buttonStepMethod} stepValue={this.state.stepValue} updateStep={this.setStepValue} />

            </div >


        )
    }
}

export default Counter;

// ES6
//    changeValue = (action) => {
// console.log(action);

// poniżej funkcja
//     this.setState((prevState) => {
//         return ({
//             counterValue: prevState.
//                 counterValue + 1
//         });
//     });

// }

// prevState obekt z polem counterValue/ 
// lub metoda
// this.setState({
//     counterValue: this.state.counterValue + 1
// });

// render() {
//     return (
//         <div className="counter">
//             Counter:
//             <Display displayValue={this.state.counterValue} />
//             <ButtonsPanel buttonMethod={this.changeValue} />

//         </div >

//     )
// }
// }


// export default Counter;

/* // function Counter(props) { */

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


// es5
// class Counter extends Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             counterValue: this.props.initValue
//         };

        // this.changeValue= this.changeValue.bind
        // (this);
        // konIeczne jeśl changeValue nie byłoby sztrzalkowe tylko this.changeValue() bo trzeba ręczne dołaczyc this a dla strzalkowej nie trzeba bo już ma
//     }

//     changeValue () => {

//         this.setState((prevState) => {
//             return ({
//                 counterValue: prevState.
//                     counterValue + 1
//             });
//             // prevState obekt z polem counterValue/ 
//         });

//     }

//     render() {
//         return (
//             <div className="counter">
//                 Counter:
//                 <span className="value">
//                     {/* {randomNumber} */}
//                     {this.state.counterValue}
//                 </span>
//                 <button onClick={this.changeValue}>
//                     Add 1
//                 </button>
//             </div >

//         )
//     }
// }


// export default Counter;