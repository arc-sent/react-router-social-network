import InputRecord from "./recordComponent/inputRecord";
import { useState } from "react";
import Record from "./recordComponent/Record";
export default function Records({ user }) {
    const init = [
        {
            id: 1,
            image: ['https://this-person-does-not-exist.com/img/avatar-gen63cb16d668b8c7c84a755fc3a4450b7b.jpg',
                'https://avatars.mds.yandex.net/i?id=558e7021dd0f589601fbbd4eefa4c8a7171bbb31-5239380-images-thumbs&n=13',
                ' https://this-person-does-not-exist.com/img/avatar-gend99ec3a68680783c26310940f4e2ba6c.jpg'
            ],
            text: 'ereeeer',
            like: 2
        }

    ]
    const [records, setRecords] = useState(init);

    return (
        <div>
          { user.active && <InputRecord setRecords={setRecords} />}
            <div>
                {records.map(item => {
                    return <Record item={item} user={user} key={item.id} setRecords={setRecords} records = {records}/>
                })}
            </div>
        </div>
    )
}