import { useLoaderData } from "react-router";
import { useStateUsers } from "../../data"
import InfoPage from "./InfoPage";
import Friend from "./Friend";
import Subscridion from "./Subscridion";
import Records from "./Records";
import { useState } from "react";
import {
    Button,
    Layout,
    Upload,
    Modal
} from 'antd';
import { IoIosClose } from "react-icons/io";
export default function MyPage() {
    const params = useLoaderData();
    const [users, setUsers] = useStateUsers();
    const user = users.find(item => item.id === params.contactId);
    const friends = users.filter(item => item.id !== user.id);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal2OpenSub, setmodal2OpenSub] = useState(false);

    function handleCancel() {
        setModal2Open(false)
    }
    function handleCancelSud() {
        setmodal2OpenSub(false)
    }
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
    return <div className="infoPage">
        <Modal
            title={<div style={modalStyles.header}>Друзья</div>}
            centered
            open={modal2Open}
            onCancel={() => handleCancel()}
            okText='Отправить'
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="footer">
                    <Button type="primary" onClick={() => handleCancel()} danger >Закрыть</Button>
                </div>
            )}
            styles={modalStyles}
            closeIcon={<IoIosClose style={{ fontSize: '30px', color: '#fff' }} />}
            okButtonProps={{ backgroundColor: '#ff4d4f' }}
        >
            <div className="adaptiveWrapperModal">
                <div className="friend">
                    {friends.map(item => {
                        return <Friend user={item} key={item.id} setModal2Open={setModal2Open} />
                    })}
                </div>
            </div>

        </Modal>

        <Modal
            title={<div style={modalStyles.header}>Подписки</div>}
            centered
            open={modal2OpenSub}
            onCancel={() => handleCancelSud()}
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="footer">
                    <Button type="primary" onClick={() => handleCancel()} danger >Закрыть</Button>
                </div>
            )}
            styles={modalStyles}
            closeIcon={<IoIosClose style={{ fontSize: '30px', color: '#fff' }} />}
            okButtonProps={{ backgroundColor: '#ff4d4f' }}
        >
            <div className="adaptiveWrapperModal">
                <div className="subscridion">
                    {user.subscriptions.map((item, index) => {
                        return <Subscridion group={item} key={index} />
                    })}
                </div>
            </div>

        </Modal>

        <InfoPage user={user} />
        <div className="adaptivaboutInho">
            <div className="adaptivFriend">
                <div className="wrapperInfoAdaptiv" onClick={() => setModal2Open(true)}>
                    {friends.length}
                </div> друзей
            </div>
            <div className="adaptivSubscriptions">
                <div className="wrapperInfoAdaptiv" onClick={() => setmodal2OpenSub(true)}>
                    {user.subscriptions.length}
                </div>
                подписки
            </div>
        </div>

        <div className="contentPage">
            <div className="wrapperRecords">
                <Records user={user} />
            </div>
            <div className="aboutInho">
                <div className="wrappFriend">
                    <p className="friendTitle">Друзья</p>
                    <div className="friend">
                        {friends.map(item => {
                            return <Friend user={item} key={item.id} />
                        })}
                    </div>
                </div>

                <div className="wrappSubscridion">
                    <p className="titleWrappSubscridion">Подписки</p>
                    <div className="subscridion">
                        {user.subscriptions.map((item, index) => {
                            return <Subscridion group={item} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export function loaderHeader({ params }) {
    return params
}

