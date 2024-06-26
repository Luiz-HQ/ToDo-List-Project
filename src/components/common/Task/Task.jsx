import { Icon } from '@iconify/react';
import { Checkbox } from '../../ui/checkbox';

export default function Task() {
    return(
        <div className='flex flex-col justify-start items-center h-full w-full'>
            <div className='bg-zinc-200 shadow-md flex flex-row rounded-lg w-5/6 mb-4 text-4xl items-center justify-between'>
                <div className='flex items-center'>
                    <Checkbox className="size-7" />
                    <p className='ml-2'>Tarefa 1</p>
                </div>
                <Icon icon="ph:trash" />
            </div>

            <div className='bg-zinc-200 shadow-md flex flex-row rounded-lg w-5/6 mb-4 text-4xl items-center justify-between'>
                <div className='flex items-center'>
                    <Checkbox className="size-7" />
                    <p className='ml-2'>Tarefa 2</p>
                </div>
                <Icon icon="ph:trash" />
            </div>

            <div className='bg-zinc-200 shadow-md flex flex-row rounded-lg w-5/6 mb-4 text-4xl items-center justify-between'>
                <div className='flex items-center'>
                    <Checkbox className="size-7" />
                    <p className='ml-2'>Tarefa 3</p>
                </div>
                <Icon icon="ph:trash" />
            </div>
           
        </div>
    )
}