import React from 'react'
import axios from "axios"

import './App.css'
class App extends React.Component {
    state = {advice:''}
    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            const {advice} = response.data.slip
            this.setState({advice})
        })
        .catch((err)=>
        console.log(err))
    }
    componentDidMount(){
        this.fetchAdvice();
    }
    render(){
        const {advice} = this.state
        return(
        <>
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                <p>@Breye-Foka 2024</p>
            </div>
        </div>
        </>
         
        )
    }
}
export default App