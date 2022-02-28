import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom';



class timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
        this.startTick = this.startTick.bind(this); // bind to the component
        this.endTick = this.endTick.bind(this); // bind to the component
    }
    
    startTick() {
        // start timer after button is clicked
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000);
    }

    endTick() {
        // start timer after button is clicked
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: 0
            }));
        }, 0);

        console.log(this.state)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
               
                <header className="App-header">
                    <h1>MyFitTimer Application</h1>
                    <div id="time"> Seconds: {this.state.seconds}</div>
                    <div id="padding">
                        <button onClick={this.startTick}>Start Timer</button> &nbsp;&nbsp;&nbsp;
                        <button onClick={this.endTick}>End Timer</button>
                    </div>
                </header>
            </div>
        );
    }
}

//ReactDOM.render(<timer />, document.getElementById('timer'));

export default timer