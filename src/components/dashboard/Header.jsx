import { useDispatch } from 'react-redux'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import Notification3LineIcon from 'remixicon-react/Notification3LineIcon'
import Settings3LineIcon from 'remixicon-react/Settings3LineIcon'
import { changeSidebar } from '../../actions/sidebar'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const Header = () => {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const handleToggleSidebar = () => {
        dispatch(changeSidebar())
    }
    
    return (
        <div className="flex flex-col md:flex-row bg-transparent w-full justify-between items-start">
            <div className="flex flex-col gap-2 order-2 md:order-1">
                <h1 className="text-2xl font-bold">Good morning, Christian</h1>
                <div className="flex items-center gap-2">
                    <img className="rounded-full p-1 border-2 border-purple-800 transition-colors hover:border-purple-500 cursor-pointer" src="https://avatars.githubusercontent.com/u/60295453?v=4" alt="" height={40} width={40}/>
                    <span className="text-sm">Finish your profile</span>
                    <a className="text-purple-800 text-sm font-medium transition-colors hover:text-purple-500" href="#">Edit now</a>
                </div>
            </div>
            <div className="w-full md:w-auto flex justify-between md:gap-16 pr-3 order-1 md:order-2 mb-5 md:mb-0">
                <div className='flex gap-3 md:gap-7 text-sm'>
                    <button className='border-0 transition-shadow shadow-md px-7 py-2 rounded-full font-medium'>Creator</button>
                    <button className='text-gray-400 font-medium'>Collector</button>
                </div>
                <div className='flex gap-3 md:gap-8'>
                    <button>
                        <Settings3LineIcon className='transition-transform duration-1000 hover:rotate-180' size={24}/>
                    </button>
                    <button className='relative'>
                        <Notification3LineIcon size={24} />
                        <span className="absolute top-1 right-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </button>
                    {
                        width < 768 && (
                            <button>
                                <MenuLineIcon onClick={handleToggleSidebar} size={24} />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}