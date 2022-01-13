import { Profile } from "./Profile"
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/pagination"
import "swiper/css/autoplay"

import SwiperCore, {
    Pagination,
    Autoplay
} from 'swiper';
import { useState } from "react";

SwiperCore.use([Pagination, Autoplay]);

export const Profiles = () => {
    const [profiles, setProfiles] = useState([
        { name: 'Samir Khalifa', username: '@samirahr45', avatar: 'https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', front_page: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'Adist that archive Black Trans experience in video games and animation, info@example.deg' },
        { name: 'Miriam Galvan', username: '@miriga08', avatar: 'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', front_page: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'Adist that archive Black Trans experience in video games and animation, info@example.deg' },
        { name: 'Justo Real ', username: '@justrel12', avatar: 'https://images.pexels.com/photos/673021/pexels-photo-673021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', front_page: 'https://images.pexels.com/photos/1843716/pexels-photo-1843716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'Adist that archive Black Trans experience in video games and animation, info@example.deg' },
        { name: 'Angelina Gamez', username: '@angamez34', avatar: 'https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', front_page: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', desc: 'Adist that archive Black Trans experience in video games and animation, info@example.deg' },
    ])
    return (
        <Swiper autoplay={{ delay: 4000 }} loop={true} pagination={{
            "dynamicBullets": true,
        }} className="mySwiper w-full md:w-2/5">
            {
                profiles.map((profile, index) => (
                    <SwiperSlide key={index}>
                        <Profile {...profile} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}