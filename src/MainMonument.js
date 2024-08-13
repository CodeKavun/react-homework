import React from "react"
import { NavLink } from "react-router-dom"

import rynek from "./Rynek.jpg"

class MainMonument extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Wrócz</NavLink></li>
            </ul>
            <h1>Rynek</h1>
            <img src={rynek}></img>
        </div>
    }
}

export default MainMonument;