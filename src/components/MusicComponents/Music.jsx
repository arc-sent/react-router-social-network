import { useEffect, useState } from "react";
import { Button, Input } from 'antd';
import axios from "axios";
import InputMusic from "./InputMusic";
import MusicItem from "./MusicItem";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
export default function Music() {
    const [genre, setGenre] = useState('rock');
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(false);
    const [namesearch, setNamesearch] = useState('');
    const [artistName, setArtistName] = useState('');

    // Создаем URL на основе текущего состояния
    const createUrl = () => {
        if (artistName || namesearch) {
            return `https://api.jamendo.com/v3.0/tracks/?client_id=8cdf3373&artist_name=${artistName}&namesearch=${namesearch}`;
        } else {
            return `https://api.jamendo.com/v3.0/tracks/?client_id=8cdf3373&tags=${genre}`;
        }
    };

    useEffect(() => {
        const url = createUrl();
        setLoading(true);
        axios.get(url)
            .then(response => {
                setMusic(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [genre, namesearch, artistName]);

    return (
        <div className="music">
            <div className="headerMusic">
                <InputMusic setName={setNamesearch} nameInput='namesearch' />
                <InputMusic setName={setArtistName} nameInput='artistname' />
                <Button
                    type="primary"
                    danger
                    style={{ height: '35px', marginTop: '25px' }}
                    onClick={() => {
                        // При нажатии на кнопку обновляем URL
                        const url = createUrl();
                        axios.get(url)
                            .then(response => {
                                setMusic(response.data.results);
                            })
                            .catch(error => console.error(error));
                    }}
                >
                    Искать песню
                </Button>
            </div>
            <div className="janre">
                {['rock', 'pop', 'jazz', 'indie', 'classical'].map((item) => (
                    <p
                        key={item}
                        className={genre === item ? 'activeJenreNav jenreNav' : 'jenreNav'}
                        onClick={() => setGenre(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)} {/* Делаем первую букву заглавной */}
                    </p>
                ))}
            </div>

            {loading ? (
                <div className="loadingSpin">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color: '#ff4d4f' }} spin />} />
                </div>
            ) : (
                <div className="contentMusic">
                    {music.length > 0 && music.map(item => (
                        <MusicItem obj={item} key={item.id} />
                    ))}
                </div>
            )}

        </div>
    );
}
