import MyButton from './components/common/Button/MyButton';
import MyInput from './components/common/Input/MyInput';
import AddIcon from './components/Icon/AddIcon';

import '../src/globals.css' 

export default function App() {

  return (
    <>
       <main className='flex flex-col h-screen'>
          <header className='bg-red-700 flex justify-center items-center h-24 w-full'>
            <h2 className='text-3xl font-semibold'>Minhas Tarefas</h2>
          </header>
        <div className='bg-blue-300 flex flex-col flex-grow justify-start w-full'>
          <MyButton />
          <MyButton />
          <MyButton />
        </div>
        <footer className='bg-pink-300 h-20 flex justify-between items-center w-full'>
          <div className='bg-pink-600 mx-4 flex flex-row justify-start items-start w-full'>
            <MyInput placeholder="Adicione uma nova tarefa..." />
          </div>
          <div className='bg-purple-400 mx-4 w-32 h-3/4'>
            <AddIcon />
          </div>  
        </footer>
      </main>
    </>
  )
}


