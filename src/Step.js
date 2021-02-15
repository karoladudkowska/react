import React, { Component } from 'react';
import './Step.css';


class Step extends Component {

    setValue = () => {
        this.props.updateStep(e.target.value);


    }

    render() {

        return (
            <div className="step">
                <button>Zwiększ o {this.props.stepValue}</button>
                <input type="number" value={this.props.stepValue} onChange={(e) => this.props.updateStep(e.target.value)} />

                {/* <input ref={(data) => { this._inputStep = data }} type="number" /> */}


            </div>

        );
    }
}



export default Step;