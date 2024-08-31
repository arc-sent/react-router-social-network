import { data } from "../../data";
import CardContact from "./CardContact";

export default function Contact() {
    return (
        <div>
            {data.map(item => {
                return <CardContact item={item} key={item.id} />
            })}
        </div>
    )
}

export function getChat({ params }) {
    const chatId = data.find(item => +params.contactId === item.chat.chatId);
    return { chatId };
}

