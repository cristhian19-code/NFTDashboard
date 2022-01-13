import { Creator } from "./Creator"
import { useState } from "react";

export const FeaturedCreators = () => { 
    const [creators, setCreators] = useState([
        {
            creator: 'Beatriz Rodriguez', username: '@betrod08', avatar: 'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', imgs: [
                'https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            ]
        },
        {
            creator: 'Eliza Garcia', username: '@elig84', avatar: 'https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', imgs: [
                'https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            ]
        }
    ])
    return (
        <div className="flex flex-col justify-center w-full md:w-3/5">
            <div className="flex justify-between items-center px-3">
                <p className="text-2xl font-bold">Featured Creators</p>
                <a className="text-purple-600 font-bold transition-colors text-sm hover:text-purple-500" href="#">All Creators</a>
            </div>
            <div className="flex flex-col">
                {
                    creators.map(item => (
                        <Creator key={item.creator} {...item} />
                    ))
                }
            </div>
        </div>
    )
}