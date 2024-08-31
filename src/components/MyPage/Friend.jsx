import { Link } from "react-router-dom";

export default function Friend({ user , setModal2Open }) {
    return (
    <Link to={`/page/${user.id}`} onClick={() => setModal2Open(false)}>
        <div className="wrapperDiv">
            <img src={user.avatar} className="avaFriend" />
            <p className='nameFriend'>{user.name}</p>
        </div>
    </Link>)
}