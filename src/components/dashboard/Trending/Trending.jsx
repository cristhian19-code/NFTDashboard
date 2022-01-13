import { useState } from 'react';
import { Card } from './Card';

export const Trending = () => {
    const [tendring, setTendring] = useState([
        { title: 'A pass of colors', user: '@maihunt75', eth: 0.1, ending: '12h 43m 27s', img: 'https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/2738919/pexels-photo-2738919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
        { title: 'An animal portrait', user: '@chistone64', eth: 0.05, ending: '08h 24m 41s', img: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', avatar: 'https://images.pexels.com/photos/8913789/pexels-photo-8913789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        { title: 'Flowers at', user: '@esthermac52', eth: 0.15, ending: '24h 08m 31s', img: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    ])

    return (
        <div className="bg-transparent w-full mt-10 flex flex-col">
            <h1 className="text-2xl font-bold">Trending Actions</h1>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-3 mt-3">
                {
                    tendring.map(item => <Card key={item.title} {...item} />)
                }
            </div>
        </div>
    )
}

