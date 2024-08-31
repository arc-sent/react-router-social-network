import { Button, Input, Space } from 'antd';
export default function InputMusic({ setName , nameInput }) {
    function handleChange(e){
        setName(e.target.value.replace(/ /g, "%20"))
    }
    return (
        <Space.Compact
        style={{
            width: '85%',
            height: '35px',
            marginTop: '15px'
        }}
    >
        <Input onChange={handleChange} placeholder={`Введите ${nameInput === `namesearch` ? `название трека` : `автора трека`}` }/>
    </Space.Compact>
    )

}