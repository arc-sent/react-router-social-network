import { useEffect, useState } from "react";

export const data = [
    {
        id: 'user2',
        name: 'Сергей',
        lastname: 'Харчо',
        avatar: 'https://this-person-does-not-exist.com/img/avatar-gend99ec3a68680783c26310940f4e2ba6c.jpg',
        chat: {
            chatId: 1,
            messages: [
                {
                    id: 1,
                    senderId: 'user1',
                    text: 'Привет, как дела?',
                    timestamp: '11:20',
                    isRead: true,
                },
                {
                    id: 2,
                    senderId: 'user2',
                    text: 'Все хорошо, а у тебя?',
                    timestamp: '11:25',
                    isRead: false,
                },
            ]
        }
    },
    {
        id: 'user3',
        name: 'Мария',
        lastname: 'Негрилло',
        avatar: 'https://this-person-does-not-exist.com/img/avatar-gend34285005871d8a84a181ed881147f52.jpg',
        chat: {
            chatId: 2,
            messages: [
                {
                    id: 1,
                    senderId: 'user1',
                    text: 'Привет, сегодня занята?',
                    timestamp: '11:21',
                    isRead: true,
                },
                {
                    id: 2,
                    senderId: 'user3',
                    text: 'Нет, а что?',
                    timestamp: '11:25',
                    isRead: false,
                }
            ]
        },
    },
    {
        id: 'user4',
        name: 'Ирина',
        lastname: 'Калина',
        avatar: 'https://this-person-does-not-exist.com/img/avatar-genbe7f70886c66ca2e82f33c8665f84d99.jpg',
        chat:
        {
            chatId: 3,
            messages: [
                {
                    id: 1,
                    senderId: 'user1',
                    text: 'Привет, еще возможна покупка?',
                    timestamp: '11:21',
                    isRead: true,
                },
                {
                    id: 2,
                    senderId: 'user4',
                    text: 'Нет',
                    timestamp: '11:25',
                    isRead: false,
                }
            ]
        }
    },
    {
        id: 'user5',
        name: 'Дмитрий',
        lastname: 'Савельев',
        avatar: 'https://this-person-does-not-exist.com/img/avatar-gen00ea5ff23f07e5d25672f1a6ca4bb1c5.jpg',
        chat:
        {
            chatId: 4,
            messages: [
                {
                    id: 1,
                    senderId: 'user1',
                    text: 'Привет, когда встретимся?',
                    timestamp: '11:30',
                    isRead: true,
                },
                {
                    id: 2,
                    senderId: 'user5',
                    text: 'Завтра в 3?',
                    timestamp: '11:32',
                    isRead: false,
                }
            ]
        }
    },
    {
        id: 'user6',
        name: 'Анна',
        lastname: 'Петрова',
        avatar: 'https://this-person-does-not-exist.com/img/avatar-gen63cb16d668b8c7c84a755fc3a4450b7b.jpg',
        chat:
        {
            chatId: 5,
            messages: [
                {
                    id: 1,
                    senderId: 'user1',
                    text: 'Привет, как насчет обеда?',
                    timestamp: '11:35',
                    isRead: true,
                },
                {
                    id: 2,
                    senderId: 'user6',
                    text: 'Звучит отлично!',
                    timestamp: '11:37',
                    isRead: false,
                }
            ]
        }
    }
];


export function useStateUsers() {
    const init = [
        {
            id: 'user1',
            avatar: 'https://yandex-images.clstorage.net/4C8NVf269/1115efSn5/GAQkdH0YxR0oHInwwiW8BohpE-I5hjZgs03YniLcsFw-eQTMlKmZLqu3rIO_MRdxXIPKWnfoAa76QdwPV4UhmEkJaXU8AbwBKAjY3OsV1DbIPCOXNdM-BKNQvK4qNRjJ2untJT1JFNdKgvCy7kQqTRjOVq9msb0nFnQVAzO4gA2M_EjgzZgAdYDInIQaKSQimKiLdrmPvvXzLRk3Ru08yf7dif1tMbBDWsbUjpZsK23MOvr-tr1Fj84Q1eOLqNglXEh8mN3UkOEwgMyoDv00NvQE9wJ5_w5xj635W3Z1AEUWoXUN8V0sXy62HGoqYG95yF6WguqVIe9iCF0PuwSs3dRQmAT1iNSJAMyYzAbhsL4gmCdmZZOucedNwa9K1aRxwgXNjel1hENiDmSGusj_sTjKojaqLUHrZrgdD7vo8Bm0DKgcddwYiaCI5JCCRdwetDj3zsn_7q0f1c1TumnUDdLxJQ1RBRQb2srEjlqEG6VInkKaBmW1_7qMmad3qIwdoNBwLJH4bD2kiGh0svXg9gTIt87p-zaR7_0Jr2JVYAG6bUkN5d1glyKuzJ7ewKt5MI5uBrIhoQMyDNXDPyAc8VDIjKhVxKzNOCCsKHIt7A4YXL9ieV_KbWchHVv63dQVNrGFMXHZpOvCAqyqQkCTeUi6Pv4urTlLlpyZz--U8NVcRDyEOThAjZiUBBRiyVwCeJzrku1DguVHoZG_epGkZXb5xdHZaWhrPnYgpuJYH9ncrgKGrkmpExJ4iecT3MyFyHDo_K0UxI2khEhsQoFAkjBsA24pdz6dw-Vpo-55JOFG5cktUeEYk77ePCq-fJu1OM6KNrblpSeeDE0fs3xwpVzgOADRaCituJjU7BIxKAYkhGfCGWcucWvhLff-HfjZgklJDS1ZhOO6hngiVuCPNYi2SnK-bcmDjnwZ_7PoiNl8jLwU3QDMESTE_NgaJZAafECTQoFvUs1bTfXn7p2M',
            name: 'Алексей',
            lastname: 'Кравченко',
            status: 'Живу моментом.',
            subscriptions: [
                {
                    title: 'Кулинария',
                    image: 'https://avatars.mds.yandex.net/i?id=558e7021dd0f589601fbbd4eefa4c8a7171bbb31-5239380-images-thumbs&n=13',
                    followers: 10234,
                },
                {
                    title: 'Технологии',
                    image: 'https://kartinki.pics/uploads/posts/2022-12/1670354651_13-kartinkin-net-p-sovremennie-tekhnologii-kartinki-vkontakte-17.jpg',
                    followers: 20456,
                },
                {
                    title: 'Путешествия',
                    image: 'https://yandex-images.clstorage.net/97oaFq371/ca5d26ua7Uc-/0krSYv_RwGZvC2i-FwXcds6Rt79sbmNxqlJxTcxFdkMM__Yb-c1-1gMag58cBNEkMspUvi_GJlhKXyCaW0hjO-M-Fna-NDUSPp4oPidV_aMaoKZ6zCuy1Y-SxXgpNZYzahkBXHuLrGUUneEtuISEhEe7hT8rFYDJawhAX3wOVJ2iePGCy8MyBRroGewlBL5hHqOHu91qkVFPQPVP-IHAt9sKUhyJGs3mJt9SHGoXBwUlSaFMS0YzHCt5gI9M3wR8USrx86gyEJZLWui9V2b9cz1htLidibGRz0BE_pmRY1VJy5Hv6Kr9tMcfgy7aZTVXBapSnygHcq0Ze1C-bi02nbIasYFqA4CECpn7_CR3vwMOwEQrjalw879ytV9po0EGexnjLKoLDZSmPaIf6_YmhXeLcR1K5CNtGukBDD5NZD5zeOMAWlBAxnlpaHxl9BzjvuF2uvyK0fCukJVdGfAxR2rKcg75W25nRz8gLGp318UWS6MeuuZjfGkZI42uP7b8U3qxMYtTsSVru8i8FeadA00C5cqtqUBAjNBWDVuiMVa4quHeCQnOhxSvAUwIlvbm1Ikw7MhlUc0YmyM9zmxmvNAK8WPoM2AGyqnaDYfF_zLfMVbJ7DkRMy2Shg0pIHHXW8pyXAlJPhW2XyA8O4WV5WW48wz75GHOSigTjy59Nv-h2KHBK4GCxiv6O451ByxwPrL0Se6bIcEsEmXe-uMDdgpqwD0K2A0HVn3znmtEF2cWu3MteQUQvgibg_0u3Wc8QmpT8snQg3RqeKne5dW8YNzgddo8STHQ71LUDJkScdYqeLHtCsieJFZ9Yf1rpkSmhxlinPqVIe8KObPP_z9GnnP48sEpc5EluRq7z4ZELOCe0aX43_gz8__ipT3LscGWa3ohrFlI7ETFX3DueSfEBQT6IP1I1OO8Gwigza-N9O2CO0ACW6Fw1eq7iywUR78yPkBm2oyJcpMdEoTfA',
                    followers: 15892,
                }
            ],
            active: true
        },
        {
            id: 'user2',
            avatar: 'https://this-person-does-not-exist.com/img/avatar-gend99ec3a68680783c26310940f4e2ba6c.jpg',
            name: 'Сергей',
            lastname: 'Харчо',
            status: 'Каждый день — новая история.',
            subscriptions: [
                {
                    title: 'Фотография',
                    image: 'https://example.com/images/photography.jpg',
                    followers: 12345,
                },
                {
                    title: 'Спорт',
                    image: 'https://example.com/images/sport.jpg',
                    followers: 8765,
                },
                {
                    title: 'Музыка',
                    image: 'https://example.com/images/music.jpg',
                    followers: 23456,
                }
            ],
            active: false
        },
        {
            id: 'user3',
            avatar: 'https://this-person-does-not-exist.com/img/avatar-gend34285005871d8a84a181ed881147f52.jpg',
            name: 'Мария',
            lastname: 'Негрилло',
            status: 'Улыбка — мое супероружие.',
            subscriptions: [
                {
                    title: 'Книги',
                    image: 'https://example.com/images/books.jpg',
                    followers: 6789,
                },
                {
                    title: 'Фильмы',
                    image: 'https://example.com/images/movies.jpg',
                    followers: 14567,
                },
                {
                    title: 'Искусство',
                    image: 'https://example.com/images/art.jpg',
                    followers: 9876,
                }
            ],
            active: false
        },
        {
            id: 'user4',
            avatar: 'https://this-person-does-not-exist.com/img/avatar-genbe7f70886c66ca2e82f33c8665f84d99.jpg',
            name: 'Ирина',
            lastname: 'Калина',
            status: 'В поисках вдохновения.',
            subscriptions: [
                {
                    title: 'Здоровый образ жизни',
                    image: 'https://example.com/images/healthy_lifestyle.jpg',
                    followers: 15342,
                },
                {
                    title: 'Мода',
                    image: 'https://example.com/images/fashion.jpg',
                    followers: 8923,
                },
                {
                    title: 'Саморазвитие',
                    image: 'https://example.com/images/self_development.jpg',
                    followers: 2345,
                }
            ],
            active: false
        },
        {
            id: 'user5',
            avatar: 'https://this-person-does-not-exist.com/img/avatar-gen00ea5ff23f07e5d25672f1a6ca4bb1c5.jpg',
            name: 'Дмитрий',
            lastname: 'Савельев',
            status: 'Мир полон возможностей.',
            subscriptions: [
                {
                    title: 'Туризм',
                    image: 'https://example.com/images/tourism.jpg',
                    followers: 16234,
                },
                {
                    title: 'Кулинария',
                    image: 'https://example.com/images/culinary.jpg',
                    followers: 10456,
                },
                {
                    title: 'Фотография',
                    image: 'https://example.com/images/photography.jpg',
                    followers: 19345,
                }
            ],
            active: false
        },
        {
            id: 'user6',
            avatar: 'https://this-person-does-not-exist.com/img/avatar-gen63cb16d668b8c7c84a755fc3a4450b7b.jpg',
            name: 'Анна',
            lastname: 'Петрова',
            status: 'Люблю жизнь и людей.',
            subscriptions: [
                {
                    title: 'Театр',
                    image: 'https://example.com/images/theatre.jpg',
                    followers: 7832,
                },
                {
                    title: 'Йога',
                    image: 'https://example.com/images/yoga.jpg',
                    followers: 5678,
                },
                {
                    title: 'Музыка',
                    image: 'https://example.com/images/music.jpg',
                    followers: 21056,
                }
            ],
            active: false
        }
    ];

    const [users, setUsers] = useState(init);
    return [users, setUsers];
}




