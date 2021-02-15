import React, { useState, useEffect } from 'react';
import './Clockfunctional.css';


const Clockfunctional = (props) => {
    console.log(`Initialization lifestyle: setting state [date, setDate]`)

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date())

    useEffect(() => {
        let timerID = setInterval(() => {
            tick()
        }, 1000
        );
        console.log(`Munting && Updating Lifecycle: componentDidMount && componentDidUpdate`);

        return (() => {
            clearInterval(timerID)
            console.log(`Unmounting sLifecycle: componentWillUnMount ()`);

        });
    }, [date]);

    return (
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()}
                <span onClick={props.toggleClockMethod}> X</span>
            </h4>
        </div>

    );

}

export default Clockfunctional;