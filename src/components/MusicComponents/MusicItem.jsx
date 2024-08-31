export default function MusicItem({obj}){
    return (
        <div className="MusicItem">
            <img src={obj.image} className="ImageMusicItem"/>
            <div className="rigthContent">
                {obj.name} - {obj.artist_name}
                <audio src={obj.audio} controls className="audioMusic"></audio>
            </div>
        </div>
    )
}