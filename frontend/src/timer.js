import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import http from './http-common';
import axios from "axios"

function setZeros(i) {
    if (i < 10) return "0" + i;
    return i;
}

class timer extends Component {
    constructor() {
        super();

        let start = 0,
            interval;

        this.state = {
            s: "00",
            m: "00",
            h: "00",
            t: "0",
            placeholder: "00 : 00 : "
        };

        //start timer
        this.startTimer = () => {
            // if startTimer is running
            if (this.start == 1) return;

            this.start = 1; // run startTimer
            let ss = 0,
                mm = 0,
                hh = 0;
            interval = setInterval(() => {
                ss++;
                if (ss == 60) {
                    ss = 0;
                    mm++;
                }
                if (mm == 60) {
                    mm = 0;
                    hh++;
                }
                this.setState({
                    s: setZeros(ss),
                    m: setZeros(mm),
                    h: setZeros(hh)
                });
            }, 1000);
        }; // startTimer ends

        //stop timer
        this.stopTimer = () => {
            if (this.start == 0) return;

            if (this.state.t == 5) {
                this.state.t = 0;
            }
            this.state.t++;

            this.state.posts.times[this.state.t].startTime = "00" + " : " + "00" + " : " + "00";
            this.state.posts.times[this.state.t].endTime = this.state.h + " : " + this.state.m + " : " + this.state.s;
            this.state.posts.times[this.state.t].difference = this.state.h + " : " + this.state.m + " : " + this.state.s;
            
            if (this.state.placeholder != "") {
                this.state.posts.times[0].difference = this.state.placeholder + this.state.posts.times[0].difference;
                this.state.posts.times[2].difference = this.state.placeholder + this.state.posts.times[2].difference;
                this.state.posts.times[3].difference = this.state.placeholder + this.state.posts.times[3].difference;
                this.state.posts.times[4].difference = this.state.placeholder + this.state.posts.times[4].difference;
                this.state.posts.times[5].difference = this.state.placeholder + this.state.posts.times[5].difference;
                this.state.placeholder = "";
            }

            this.start = 0;
            this.setState({
                s: "00",
                m: "00",
                h: "00"
            });
            clearInterval(interval);

            axios.post('http://localhost:5000/api/v1/times', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })

            
            console.log(this.state)
        }; // stopTimer ends
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/times')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let { s, m, h } = this.state;
        return (
            <div>
               
                <header className="App-header">
                    <h1>MyFitTimer Application</h1>
                    <div id="time">
                        { h + " : " + m + " : " + s }
                    </div>
                    <div id="padding">
                        <button onClick={this.startTimer}>Start Timer</button> &nbsp;&nbsp;&nbsp;
                        <button onClick={this.stopTimer}>End Timer</button>
                    </div>
                    <div id="time">
                        <ul>
                            Previous Times
                            {this.state.posts && Object.keys(this.state.posts).map((issue, i) =>
                                (
                                    <li key={i}>
                                        { this.state.placeholder + this.state.posts.times[Object.keys(this.state.posts).length-i].difference }
                                    </li>
                                ))}
                        </ul>
                    </div>
                </header>
            </div>
        );
    }

}

export default timer