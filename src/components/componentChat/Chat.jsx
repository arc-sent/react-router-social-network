import { useLoaderData } from "react-router";
import { useEffect, useRef, useState } from "react";
const { Header } = Layout;
import {
    Button,
    Input,
    Space,
    Layout,
    Upload,
    Modal
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import Messages from "./messeges";
import { Link } from "react-router-dom";

const headerStyle = {
   
};
const modalStyles = {
    header: {
        backgroundColor: '#333842',
        color: "#fff"
    },
    body: {
        backgroundColor: '#333842',
        color: "#fff"
    },
    footer: {
        backgroundColor: '#333842',
        color: "#fff"
    },
    content: {
        backgroundColor: '#333842',
        color: "#fff"
    },
    CancelBtn: {
        backgroundColor: '#ff4d4f',
    }
};
export default function Chat() {
    const { chatId } = useLoaderData();
    const [modal2Open, setModal2Open] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [message, setMessage] = useState(chatId.chat.messages);
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('')
    const [nextID, setNextID] = useState(2);
    const [photo, setPhoto] = useState([]);
    const parent = useRef(null);


    function handleOk() {
        let wrpperPhoto = document.querySelector('.wrpperPhoto');
        if (wrpperPhoto) {
            wrpperPhoto.innerHTML = '';
        }
        setModal2Open(false);
    }

    function handleCancel() {
        let wrpperPhoto = document.querySelector('.wrpperPhoto');
        if (wrpperPhoto) {
            wrpperPhoto.innerHTML = '';
        }
        setModal2Open(false);
    }


    function handleClick(typee) {
        if (typee === 'buttonInputMessage') {
            if (inputValue === '') return;

            const now = new Date();
            let hour = now.getHours();
            let minutes = now.getMinutes();

            setMessage([...message, {
                id: nextID + 1,
                senderId: "user1",
                text: inputValue,
                timestamp: `${hour}:${minutes}`,
                isRead: false,
            }]);

            setNextID(nextID + 1);
            setInputValue('');
            handleOk()
        } else {

            const now = new Date();
            let hour = now.getHours();
            let minutes = now.getMinutes();

            setMessage([...message, {
                id: nextID + 1,
                senderId: "user1",
                text: inputValue2,
                timestamp: `${hour}:${minutes}`,
                isRead: false,
                photo: photo,
            }]);

            setNextID(nextID + 1);
            setInputValue2('');
            setPhoto([]);
        }

    }

    function handleFileChange(e) {
        let file = e.target.files[0];
        let render = new FileReader();

        render.readAsDataURL(file);

        render.onload = () => {
            setImageSrc(render.result);
            if (!modal2Open) {
                setModal2Open(true);
            }
        }

        render.onerror = () => {
            console.log(render.error);
        }
    };

    useEffect(() => {
        const fileButton = document.querySelector('.fileButton');

        fileButton.addEventListener('change', handleFileChange);

        return () => {
            fileButton.removeEventListener('change', handleFileChange);
        };
    }, [modal2Open]);


    useEffect(() => {
        if (modal2Open && imageSrc) {
            let wrpperPhoto = document.querySelector('.wrpperPhoto');
            let img = document.createElement('img');
            img.src = imageSrc;
            img.className = 'imgInModal';
            wrpperPhoto.append(img);
            setPhoto([...photo, imageSrc]);
        }
    }, [modal2Open, imageSrc]);

    return (
        <>
            <div className="wrapperChat">
                <Header style={headerStyle} className = 'headerChat'>
                    <Link to='/contacts'><div className="arrow arrow-left"></div></Link>
                    <img src={chatId.avatar} className="ava" />
                    <p className="nameUser">{chatId.name} {chatId.lastname}</p>
                </Header>
                <div ref={parent} className="chatContent">
                    {message.map((item) => {
                        return <Messages item={item} parent={parent} key={item.id} />
                    })}
                </div>

                <div>
                    <div className="photoPreview">
                        <Modal
                            title={<div style={modalStyles.header}>Отправить изображение</div>}
                            centered
                            open={modal2Open}
                            onOk={() => handleOk()}
                            onCancel={() => handleCancel()}
                            okText='Отправить'
                            cancelText='Закрыть'
                            footer={(_, { OkBtn, CancelBtn }) => (
                                <div className="footer">
                                    <label htmlFor="file" className="wrappButton">Добавить</label>
                                    <input type="file" id="file" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} />
                                    <div>
                                        <Button type="primary" onClick={() => handleCancel()} style={{ marginRight: '15px' }} danger >Закрыть</Button>
                                        <Button type="primary" onClick={() => {
                                            handleClick('photoClick')
                                            handleOk()
                                        }} danger>Отправить</Button>
                                    </div>
                                </div>
                            )}
                            styles={modalStyles}
                            closeIcon={<IoIosClose style={{ fontSize: '30px', color: '#fff' }} />}
                            okButtonProps={{ backgroundColor: '#ff4d4f' }}
                        >
                            <div className="wrapperPepper">
                                <div className="wrpperPhoto">
                                </div>
                            </div>
                            <div className="wrapperPepper">
                                <p className="sub">Подпись</p>
                                <input className="inputSubscribe" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '20px' }}>
                <Space.Compact
                    style={{
                        width: '100%',
                        height: '60px'
                    }}
                >
                    <input type="file" className="fileButton" />
                    <Input
                        className="inputMessage"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ background: '#333842', border: '#333842', color: '#fff' }}
                    />
                    <Button
                        type="primary"
                        style={{ height: '60px' }}
                        danger
                        onClick={() => handleClick('buttonInputMessage')}
                    >
                        Отправить
                    </Button>

                </Space.Compact>
            </div>
        </>
    )
}