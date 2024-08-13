import React from "react"
import { NavLink } from "react-router-dom"

import rynek from "./Rynek.jpg"
import samochod from "./meleks06-1.jpg"
import museum from "./M_Narodowe.jpg"

class Monuments extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Wrócz</NavLink></li>
            </ul>
            <h1>Rynek</h1>
            <img src={rynek}></img>
            <h1>Stary samochód</h1>
            <img src={samochod}></img>
            <h1>Museum Narodowe</h1>
            <img src={museum}></img>
            <br/>
            <h1>I dużo innych rzeczy...</h1>
        </div>
    }
}

export default Monuments;