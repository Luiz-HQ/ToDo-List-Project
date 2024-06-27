import { Icon } from '@iconify/react';
import { Checkbox } from '../../ui/checkbox';

// eslint-disable-next-line react/prop-types
export default function Task({ children }) {
    return(
        <div className='flex flex-col justify-start items-center mb-6 w-full'>
            <div className='bg-zinc-200 shadow-md flex flex-row rounded-lg w-5/6 text-4xl items-center justify-between'>
                <div className='flex items-center'>
                    <Checkbox className="size-7 rounded-xl" />
                    <p className='ml-2'>{children}</p>
                </div>
                <Icon 
                    className='hover:shadow-lg hover:bg-zinc-300 hover:rounded-xl cursor-pointer transition-transform duration-400 transform hover:scale-110' 
                    icon="ph:trash" 
                />
            </div>           
        </div>
    )
}