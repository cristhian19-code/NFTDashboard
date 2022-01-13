import PropTypes from 'prop-types';
import ethereum from '../../../assets/Ethereum.png';

export const Card = ({ title, user, eth, ending, img, avatar }) => { 
    return (
        <div className="w-full sm:w-2/3 md:w-1/3 flex-wrap-reverse shadow-md rounded-2xl select-none">
            <div className="flex justify-center p-2 h-52">
                <img className="w-full h-full rounded-2xl" src={ img } alt="" />
            </div>
            <div className="flex justify-between items-center py-3 px-4">
                <div className='flex flex-col'>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <span className='mt-1'>{user}</span>
                </div>
                <div className="flex justify-between items-center">
                    <img className="rounded-full" src={ avatar } alt="" height={50} width={50} />
                </div>
            </div>
            <div className="flex flex-col transition-colors hover:bg-gray-900 cursor-pointer rounded-b-2xl py-4 px-4 hover:text-white ">
                <div className='flex justify-between items-center'>
                    <p className="text-gray-400 text-md font-medium">Current bid</p>
                    <p className='text-gray-400 text-md font-medium'>Ending in</p>
                </div>
                <div className='flex justify-between mt-2 items-center text-gray-500'>
                    <div className="flex items-center">
                        <img src={ethereum} alt="" height={15} width={15} />
                        <span className='font-bold ml-2'>{eth} ETH</span>
                    </div>
                    <p className='font-bold'>{ending}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    eth: PropTypes.number.isRequired,
    ending: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}