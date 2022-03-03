import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import http from './http-common';
//import timerDataServices from "./timerDataServices";
import axios from "axios"

class TimerDataServices extends Component {
    

    render() {
        return (
            <div>
                <timer cT={this.createTime} />
            </div>
            )
    }
}

class timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0, posts: {} };
        this.startTick = this.startTick.bind(this); // bind to the component
        this.endTick = this.endTick.bind(this); // bind to the component
        this.getAll = this.startTick.bind(this); // bind to the component
        this.createTime = this.endTick.bind(this); // bind to the component
    }

    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    createTime(data) {
        return http.post(data);
    }

    deleteTime(id) {
        return http.delete(`?id=${id}`);
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
    
    startTick () {
        this.state.seconds = 0;
        // start timer after button is clicked

        

        axios.post('http://localhost:5000/api/v1/times', this.state.seconds)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    endTick() {
        // start timer after button is clicked
        
        /*if (this.state.posts.times.length > 7) {
            this.state.posts.times.length = 0;
        }*/

        axios.get('http://localhost:5000/api/v1/times')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
        console.log(this.state)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const posts = this.state.posts;
        
        return (
            <div>
               
                <header className="App-header">
                    <h1>MyFitTimer Application</h1>
                    <div id="time">
                        Seconds: { this.state.seconds }
                    </div>
                    <div id="padding">
                        <button onClick={this.startTick}>Start Timer</button> &nbsp;&nbsp;&nbsp;
                        <button onClick={this.endTick}>End Timer</button>
                    </div>
                    <div id="time">
                        <ul>
                            {this.state.posts && Object.keys(this.state.posts).map((issue, i) =>
                                (
                                    <li key={i}>
                                        {1+ i}: { posts.times[2+i].difference }
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