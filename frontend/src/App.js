import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
//import PostList from './PostList'
import PostForm from './timer'

const startClick = () => {
    // call function
}

const endClick = () => {
    //call function
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostForm />
                { }
            </div>
        )
    }
}

export default App



/*<div className="App">
            <header className="App-header">
                <h1>MyFitTimer Application</h1>
                <div id="time">[time]</div>
                <div id="padding">
                    <button onClick={startClick}>Start Timer</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={endClick}>End Timer</button>
                </div>
            </header>
        </div>*/