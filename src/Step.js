import React, { Component } from 'react';
import './Step.css';


class Step extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // stepValue: 5


        };

        console.log(`Initialization lifeCycle: constructor (props)`);
    }

    componentDidMount() {


        console.log(`Mounting lifeCycle: componentDidMount()`);
    }

    componentDidUpdate() {
        console.log(`Updation lifeCycle: componentDidUpdate() `);
    }

    componentWillUnmount() {

        console.log(`UnMounting lifeCycle: componentWillUnmount()`);

    }



    render() {

        return (
            <div className="step">
                <button>Zwiększ o X</button>
                <input type="number" ref={this.textInput} onChange={this.Change} />
                {/* <input ref={(data) => { this._inputStep = data }} type="number" /> */}


            </div>

        );
    }
}



export default Step;