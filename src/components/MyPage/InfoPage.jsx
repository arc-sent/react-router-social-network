import {
    Button,
} from 'antd';
import { Link } from 'react-router-dom';
export default function InfoPage({ user }) {
    return (
        <div className='wrapperAva'>
            <div className='backgroud'>
            </div>
            <div className='BottomInfo'>
                <div className='avaAndName'>
                    <img src={user.avatar} className='avatar' />
                    <div className='infoAboutUser'>
                        <p className='userName'>{user.name} {user.lastname}</p>
                        <p className='userStatus'>{user.status}</p>
                    </div>
                </div>

                {user.active && <Link to={`/page/${user.id}/edit`}><Button type='primary' danger className='redactProfile'>Редактировать профиль</Button></Link>}
            </div>

        </div>
    );
}
