import CheckboxCircleFillIcon from 'remixicon-react/CheckboxCircleFillIcon'
import PropTypes from 'prop-types'

import './style.css'
import { useSelector } from 'react-redux'

export const Profile = ({ name, username, avatar, desc, front_page }) => {
    const { darkmode } = useSelector(state => state.darkmode)

    return (
        <div className="flex flex-col p-3">
            <div className="h-44 overflow-hidden rounded-xl ">
                <img className="w-full h-full" src={ front_page } alt="" />
            </div>
            <div className={`flex flex-col justify-center items-center px-4 pt-7 pb-7 relative bg-transparent ${!darkmode ? 'text-gray-800' : 'text-gray-200'} rounded-b-xl shadow-lg`}>
                <div className="absolute -top-9 flex justify-center w-full">
                    <img className={`rounded-full border-4 transition-colors ${!darkmode ? 'border-white' : 'border-gray-900'}`} src={ avatar } alt="" height={65} width={65}/>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <p className="text-xl font-bold flex items-center">{ name } <CheckboxCircleFillIcon size={15} className='ml-2 text-blue-600 bg-white rounded-full' /> </p>
                        <p className="text-xs font-medium text-gray-500">{username }</p>
                    </div>
                    <button className='transition-colors duration-200 bg-indigo-600 shadow-md shadow-indigo-500/70 hover:bg-indigo-500 text-white px-3 py-2 rounded-full font-bold text-sm'>+ Follow</button>
                </div>
                <div className='mt-3'>
                    <p className='text-xs'>{ desc }</p>
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}