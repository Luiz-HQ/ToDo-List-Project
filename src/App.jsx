import MyButton from './components/common/Button/MyButton';
import MyInput from './components/common/Input/MyInput';
import AddIcon from './components/Icon/AddIcon';

import { Label } from './components/ui/label';

import '../src/globals.css' 

export default function App() {

  return (
    <>
       <main className='bg-customGray flex flex-col h-screen'>
          <header className=' shadow-md flex justify-center items-center h-24 w-full'>
            <h2 className='text-3xl font-semibold'>Minhas Tarefas</h2>
          </header>
        <div className='flex flex-col flex-grow justify-start w-full'>
          <MyButton />
          <MyButton />
          <Label htmlFor='text'>Tarefa numero 1 </Label><MyInput type="checkbox" />
        </div>
        <footer className='h-20 flex justify-between items-center w-full'>
          <div className='mx-4 flex flex-row justify-start items-start w-full'>
            <MyInput 
              className="rounded-3xl h-11 shadow-md" 
              placeholder="Adicione uma nova tarefa..." 
            />
          </div>
          <div className='mx-4 w-32 h-3/4'>
            <AddIcon />
          </div>  
        </footer>
      </main>
    </>
  )
}


