export default function Subscridion({group}){
    return (
        <div className="subItem">
            <img src={group.image} className="avaGroup"/>
            <div style={{marginLeft:'15px'}}>
                <p className="titleGroup">{group.title}</p>
                <p className= 'subGroup'>Подписчиков: {group.followers}</p>
            </div>
        </div>
    )
}