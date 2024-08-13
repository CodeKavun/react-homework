import React from "react"
import { NavLink, Outlet } from "react-router-dom"

class Home extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/info'}>Informacja o miascie</NavLink></li>
                <li><NavLink to={'/main-monument'}>Główna Pamiątka Wrocławia</NavLink></li>
                <li><NavLink to={'/monuments'}>Informacja o miascie</NavLink></li>
                <li><NavLink to={'/other'}>Inne zdjęcia</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    }
}

export default Home;