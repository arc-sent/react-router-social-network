import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function CardContact({ item }) {
    const [countMessage, setCountMessage] = useState(0);

    useEffect(() => {
        const ignores = item.chat.messages.reduce((count, item) => {
            return count + (item.isRead ? 0 : 1)
        }, 0)
        setCountMessage(ignores);
    }, [item.chat.messages]);


    return (
        <Link to={`/contacts/${item.chat.chatId}`} style={{color: '#fff'}}>
            <div key={item.id} className="wrapperCardInfo">
                <div style={{ display: 'flex' }}>
                    <img src={item.avatar} alt={item.name} className="avatarItemCard" />
                    <div style={{ marginLeft: '20px' }}>
                        <p style={{ fontSize: '16px' }}>{item.chat.messages.at(-1).text}</p>
                    </div>
                </div>
                <div className="countMessage">
                    <p>{countMessage}</p>
                </div>
            </div>
        </Link>
    )
}

