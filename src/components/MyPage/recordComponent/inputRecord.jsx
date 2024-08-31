import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Space } from 'antd';


export default function InputRecord({ setRecords }) {
    const wrapperImage = useRef(null)
    const [arrImage, setArrImage] = useState([])
    const [nextID, setNExtID] = useState(0);
    const [value, setValue] = useState('')
    function handleFileChange(e) {
        let file = e.target.files[0];
        let render = new FileReader();

        render.readAsDataURL(file);

        render.onload = () => {
            setArrImage(prev => [...prev, render.result ]);

        }

        render.onerror = () => {
            alert('При загрузке изображения произшло ошибка!')
        }
    }

    function handleClcik() {
        if (arrImage.length > 0 || value !== '') {
            setRecords(prev => [...prev, { id: nextID, image: arrImage, text: value , like: 0 }])
            setNExtID(prev => prev + 1);
            setValue('');
            setArrImage([]);
        }

    }
    return (
        <div className='inputWrapper'>
            <Space.Compact
                style={{
                    width: '100%',
                    height: '35px'
                }}
            >
                <Input onChange={(e) => setValue(e.target.value)} value={value} />
                <input type='file' className='fileButton2' onChange={handleFileChange} />
            </Space.Compact>
            <Button type="primary" danger style={{ height: '35px', marginTop: '15px' }} onClick={handleClcik}>Опубликовать</Button>
            <div>
                {arrImage.map((item, index) => {
                    return <img src={item} key={index} className='imagePrev' />
                })}
            </div>
        </div>
    )
}