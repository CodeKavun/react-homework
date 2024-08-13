import React from "react"
import { NavLink } from "react-router-dom"

import img1 from "./завантаження (1).jpg"
import img2 from "./завантаження (2).jpg"
import img3 from "./завантаження (3).jpg"
import img4 from "./завантаження (4).jpg"
import img5 from "./завантаження (5).jpg"
import img6 from "./завантаження (6).jpg"

class AnotherPhotos extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Wrócz</NavLink></li>
            </ul>
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
        </div>
    }
}

export default AnotherPhotos;