import { Icon } from '@iconify/react';

// eslint-disable-next-line react/prop-types
export default function AddIcon({ onClick }) {
    return (
        <div className=' h-full flex justify-center items-center'>  
            <Icon 
                className='text-white size-16 cursor-pointer transition-all duration-400 transform hover:scale-110 hover:text-black'
                onClick={onClick}  
                icon="fluent-mdl2:add-to"
            />
        </div>  
    )
}