import { Swiper, SwiperSlide } from 'swiper/react'
import PorpTypes from 'prop-types'

import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/autoplay"

import SwiperCore, {
    Autoplay
} from 'swiper';

SwiperCore.use([Autoplay]);


export const Creator = ({creator,username,imgs,avatar}) => {
    return (
        <div className="flex items-center h-45 gap-2 mt-4 p-2 w-full justify-between rounded-xl shadow-md">
            <div className="flex items-center gap-4 w-3/5">
                <div className="overflow-hidden h-14 w-14 rounded-full">
                    <img className="h-full" src={avatar} alt="" />
                </div>
                <div>
                    <p className="text-lg font-bold">{creator}</p>
                    <p className="text-sm">
                        <span className="text-gray-500 font-normal">{username}</span>
                        <a className="ml-2 text-xs text-purple-600 font-bold transition-colors hover:text-purple-500" href="">+ Follow</a>
                    </p>
                </div>
            </div>
            <Swiper autoplay={{ delay: 3000 }} loop={true} className=" w-2/5 h-28 rounded-lg">
                {
                    imgs.map((img,index)=> (
                        <SwiperSlide key={index}>
                            <img className="w-full h-full" src={img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

Creator.propTypes = {
    creator: PorpTypes.string.isRequired,
    username: PorpTypes.string.isRequired,
    imgs: PorpTypes.array.isRequired,
    avatar: PorpTypes.string.isRequired
}