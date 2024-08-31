import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";

export default function Record({ item, user, setRecords, records }) {
    const [like, setLike] = useState(false)
    function handleClick() {
        const newLike = !like;
        setLike(newLike);

        setRecords(prevRecords =>
            prevRecords.map(record =>
                record.id === item.id ? { ...record, like: record.like + (newLike ? 1 : -1) } : record
            )
        );
    }


    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            spaceBetween: 130,
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }, [])
    return (
        <div className="record">
            <div className="headerRecords">
                <img src={user.avatar} className="avaRecords" />
                <p className="nameUserRecord">{user.name}</p>
            </div>
            <div className="contentRecord">
                <p className="textRecords">{item.text}</p>

                <div className="swiper">

                    <div className="swiper-wrapper">
                        {item.image.map((item1, index) => {
                            return <div className="swiper-slide" key={index}><img src={item1} className="imageRecords" /></div>
                        })}
                    </div>

                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </div>
                <div>

                </div>
            </div>
            <div className='wrapperLIkeHeart'>
                <div className='likeHeart'>
                    <FaHeart style={{ width: '20px', height: '20px', color: like ? '#ff4d4f' : ' #6c7588', transition: '0.3s' }} onClick={handleClick} />
                    <p className='like'>{item.like}</p>
                </div>
            </div>

        </div>

    )
}