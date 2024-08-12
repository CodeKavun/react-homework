
export default function User(props) {
    return (
        <div>
            <strong>ПІБ:</strong> {props.fullname}<br/>
            <strong>Телефон:</strong> {props.phone}<br/>
            <strong>Email:</strong> {props.email}<br/>
            <strong>Місто:</strong> {props.city}<br/>
            <strong>XP:</strong> {props.xp}<br/>
        </div>
    )
}