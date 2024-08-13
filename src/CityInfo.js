import React from "react"
import { NavLink } from "react-router-dom"

class CityInfo extends React.Component {
    render() {
        return <div>
            <ul>
                <li><NavLink to={'/'}>Wrócz</NavLink></li>
            </ul>
            <h1>Wrocław</h1>
            <p>Wrocław – miasto na prawach powiatu w południowo-zachodniej Polsce, siedziba władz województwa dolnośląskiego i powiatu wrocławskiego. Położone w Europie Środkowej, na Nizinie Śląskiej, nad Odrą i czterema jej dopływami. Jest historyczną stolicą Dolnego Śląska, a także całego Śląska.
            Jest głównym miastem aglomeracji wrocławskiej. Trzecie pod względem liczby ludności miasto w Polsce (po Warszawie i Krakowie) – 674 132 mieszkańców (30.06.2023), piąte pod względem powierzchni – 292,81 km². Populacja miasta szacowana przez Urząd Miejski Wrocławia wynosi 893 506 osób (31.12.2022).</p>
        </div>
    }
}

export default CityInfo;