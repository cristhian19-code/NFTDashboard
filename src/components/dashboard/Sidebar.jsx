import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import createG2 from 'g2-react'
import { Stat } from 'g2'

import Layout2FillIcon from 'remixicon-react/Layout2FillIcon'
import Store2LineIcon from 'remixicon-react/Store2LineIcon'
import Briefcase2LineIcon from 'remixicon-react/Briefcase2LineIcon'
import Folder2LineIcon from 'remixicon-react/Folder2LineIcon'
import StarLineIcon from 'remixicon-react/StarLineIcon'
import Heart3LineIcon from 'remixicon-react/Heart3LineIcon'
import SunFillIcon from 'remixicon-react/SunFillIcon'
import MoonFillIcon from 'remixicon-react/MoonFillIcon'
import Contrast2LineIcon from 'remixicon-react/Contrast2LineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'

import { changeDarkMode } from '../../actions/darkmode'
import { changeSidebar } from '../../actions/sidebar'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import './style.css'

const Line = createG2(chart => {
    chart.line().position(Stat.summary.proportion('x*y')).color('#7E22CE').shape('smooth').size(3);
    chart.legend(false);
    chart.render();
})

export const Sidebar = () => {
    const data = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 5 },
        { x: 4, y: 7 },
        { x: 5, y: 9 },
        { x: 6, y: 6 },
        { x: 7, y: 12 },
        { x: 8, y: 15 },
        { x: 9, y: 19 },
        { x: 10, y: 17 },
        { x: 11, y: 20 },
        { x: 12, y: 22 },
        { x: 13, y: 23 },
        { x: 14, y: 25 },
        { x: 15, y: 26 },
        { x: 16, y: 23 },
    ]

    const [arrow, setArrow] = useState(false)
    const dispatch = useDispatch()
    
    const { width } = useWindowDimensions();
    const { darkmode } = useSelector(state => state.darkmode)
    const { active } = useSelector(state => state.sidebar)

    const handleChangeArrow = () => {
        setArrow(!arrow)
    }

    const handleDarkmode = () => {
        dispatch(changeDarkMode())
    }

    const handleToggleSidebar = () => { 
        dispatch(changeSidebar())
    }

    return (
        <aside className={`absolute ease-linear transition-all duration-300 -left-full ${!active && 'left-0'} z-10 w-full h-screen overflow-y-auto ${!darkmode ? 'bg-white' : 'bg-gray-900'} pb-5 px-6 md:relative md:left-0 md:w-2/6 xl:w-1/4 md:pb-8 md:px-10`}>
            {
                width < 768 && (
                    <button onClick={handleToggleSidebar} className='absolute top-5 right-5'>
                        <CloseLineIcon size={25} className='hover:rotate-180' />
                    </button>
                )
            }
            
            <div className="flex pt-10 items-center justify-between">
                <div className="flex">
                    <img className="rounded-full" src="https://avatars.githubusercontent.com/u/60295453?v=4" alt="" height={60} width={60}/>
                    <div className="flex flex-col justify-center ml-3">
                        <h1 className="text-lg font-bold">Christian AG</h1>
                        <p className="text-gray-400 font-normal text-sm">Creator <span className="text-yellow-500 font-bold text-md">Pro +</span></p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="outline-none bg-transparent text-4xl font-medium text-purple-700">+</button>
                </div>
            </div>
            <div className="rounded-md h-40 w-full mt-7 overflow-auto">
                <Line
                    data={data}
                    size={3}
                    color='type'
                    width={100}
                    height={160}
                    forceFit={true}
                    plotCfg={{ margin: [10, 10, 10, 10],color: '#F44444' }}
                />
            </div>
            <div className='mt-10'>
                <ul className='font-bold'>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><Layout2FillIcon className='mr-2'/> Dashboad</li>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><Store2LineIcon className='mr-2'/> Market <span className='bg-yellow-500 rounded-full text-white ml-3 px-2 text-xs flex items-center font-medium'>PRO</span></li>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><Briefcase2LineIcon className='mr-2'/>Active Bids</li>
                </ul>
                <h2 className='uppercase mt-12 font-semibold text-sm'>My Profile</h2>
                <ul className='font-bold'>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><StarLineIcon className='mr-2' /> My Portfolio <span className='ml-4 rounded-full px-2 bg-gray-200 text-gray-500'>+3</span></li>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><Folder2LineIcon className='mr-2' /> History</li>
                    <li className='transition-colors duration-100 hover:text-purple-500 cursor-pointer flex mt-6'><Heart3LineIcon className='mr-2' />Favourites <span className='ml-4 rounded-full px-2 bg-gray-200 text-gray-500'>+6</span></li>
                </ul>
            </div>
            
            <button className='uppercase flex mt-4 text-xs items-center' onClick={handleChangeArrow}>
                <ArrowDownSLineIcon className={`transition-transform ${arrow && '-rotate-180'}`}/>
                Show more
            </button>
            <div className="mt-10 flex items-center font-bold bg-transparent">
                <span className="flex">
                    <Contrast2LineIcon className="mr-2" /> {!darkmode ? "Light" : "Dark"} Mode
                </span>
                <label htmlFor="toggleB" className="flex items-center cursor-pointer ml-8">
                    <div className="relative">
                        <input onClick={handleDarkmode} type="checkbox" id="toggleB" className="sr-only"/>
                        <div className="block bg-gray-400 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition flex justify-center items-center">
                            {
                                !darkmode
                                    ?<SunFillIcon className="text-purple-700" size={16} />
                                    :<MoonFillIcon className='text-white' size={16}/>
                            }
                        </div>
                    </div>
                </label>
            </div>
        </aside>
    )
}