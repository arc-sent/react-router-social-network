import { useLoaderData } from "react-router";
import { useStateUsers } from "../../data"
import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Space } from 'antd';
import { Link } from "react-router-dom";

export default function PageEdit() {
    const params = useLoaderData();
    const [users, setUsers] = useStateUsers();
    const userEdit = users.find(item => item.id === params.contactId);
    const [userName, setUserName] = useState(userEdit.name);
    const [lastName, setLastName] = useState(userEdit.lastname);
    const [status, setStatus] = useState(userEdit.status);
    const [srcEdit, setSrcEdit] = useState(userEdit.avatar)
    function handleChange1(e) {
        setUserName(e.target.value)
    }
    function handleChange2(e) {
        setLastName(e.target.value)
    }
    function handleChange3(e) {
        setStatus(e.target.value)
    }

    function handleClick() {
        let qestion = confirm('Сохарнить результат?');
        if (qestion) {
            setUsers(prev => {
                const updatedUsers = prev.map(item =>
                    item.id === userEdit.id
                        ? { ...item, name: userName, lastname: lastName, status: status, avatar: srcEdit }
                        : item
                );
                console.log(updatedUsers); // Логирование обновленного массива
                return updatedUsers;
            });
        } else {
            return
        }

    }





    function handleFileChange(e) {
        let file = e.target.files[0];
        let render = new FileReader();

        render.readAsDataURL(file);

        render.onload = () => {
            setSrcEdit(render.result);
        }

        render.onerror = () => {
            alert('При загрузке изображения произшло ошибка!')
        }
    }
    return (
        <div className="wraperUserEdit">
            <Link to={`/page/${userEdit.id}`}><div className="arrow arrow-left"></div></Link>
            <div className="userEdit">
                <div>
                    <label htmlFor="file"><img src={srcEdit} alt="" className="EditAva" /></label>
                    <input type="file" id="file" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} />

                    <div className="nameEdit">
                        {userName} {lastName}
                    </div>
                    <div className="statusEdit">
                        {status}
                    </div>
                </div>
                <Space.Compact
                    style={{
                        width: '50%',
                        height: '35px',
                        marginBottom: '15px',
                    }}
                >
                    <Input value={userName} onChange={handleChange1} />
                </Space.Compact>

                <Space.Compact
                    style={{
                        width: '50%',
                        height: '35px',
                        marginBottom: '15px',
                    }}
                >
                    <Input value={lastName} onChange={handleChange2} />
                </Space.Compact>

                <Space.Compact
                    style={{
                        width: '50%',
                        height: '35px',
                        marginBottom: '15px',
                    }}
                >
                    <Input value={status} onChange={handleChange3} />
                </Space.Compact>
                <Link to={`/page/${userEdit.id}`}><Button type="primary" danger style={{ height: '35px' }} onClick={handleClick}>Сохранить изменения</Button></Link>
            </div>
        </div >
    )
}

