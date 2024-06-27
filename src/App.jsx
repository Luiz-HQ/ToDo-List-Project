import MyInput from './components/common/Input/MyInput';
import AddIcon from './components/Icon/AddIcon';
import Task from './components/common/Task/Task';

import '../src/globals.css' 
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]); /*Aqui eu controlo o estado do array de tarefas */
  const [newTask, setNewTask] = useState(''); /*Aqui eu controlo o estado do input! */

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }
  
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <>
       <main className='bg-customGray flex flex-col h-screen'>
          <header className=' shadow-md flex justify-center items-center h-24 w-full'>
            <h2 className='text-3xl font-semibold'>Minhas Tarefas</h2>
          </header>
        <div className='flex flex-col flex-grow justify-start items-center pt-5 w-full'>
            {tasks.map((task, index) => (
              <Task key={index}>{task}</Task>
            ))}
        </div>
        <footer className='h-20 flex justify-between items-center w-full'>
          <div className='mx-4 flex flex-row justify-start items-start w-full'>
            <MyInput 
              className="rounded-3xl h-11 shadow-md" 
              placeholder="Adicione uma nova tarefa..." 
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              value={newTask} /* Utilizo esse prop para após adicionar a terefa voltar o input para vazio */
            />
          </div>
          <button className='rounded-full mx-4 w-16 h-3/4'>
            <AddIcon onClick={handleAddTask} />
          </button>  
        </footer>
      </main>
    </>
  )
}


