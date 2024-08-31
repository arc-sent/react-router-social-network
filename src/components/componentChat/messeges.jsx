import { useEffect, useRef } from 'react';
import { data, useStateUsers } from '../../data'

export default function Messages({ item, parent }) {
    const [users , setUsers] = useStateUsers();
    let obj = users.find(item1 => item1.id === item.senderId);
    const child = useRef(null);

    useEffect(() => {
        if (parent.current && child.current) {
            parent.current.scrollTop =  parent.current.scrollHeight;
        }
    }, [child]);
    

    return (
        <div key={item.id} className={item.photo ? "wrapperMessageInfo2" : ' wrapperMessageInfo'} ref={child}>
            <div style={{ display: 'flex' }}>
                <img src={obj.avatar} alt={item.name} className="avatarItemCard" />
                <p className="nameMessages">{obj.name}</p>
            </div>
            <div style={{ marginLeft: '20px' }}>
                {item.photo && (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {item.photo.map((item1, index) => (
                            <img
                                key={index}
                                src={item1}
                                className='photoMessages'
                                style={{ width: 'calc(50% - 10px)', margin: '5px' , height: '50vh' }}
                            />
                        ))}
                    </div>
                )}
                <p style={{ fontSize: '16px' }}>{item.text}</p>
            </div>


            <p>{item.timestamp}</p>

        </div>
    )
}
