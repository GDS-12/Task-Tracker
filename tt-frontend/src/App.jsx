import { useState,useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import axios from "axios"


function App() {
  const [tasks, settasks] = useState([]);
  useEffect(() => {
  fetchTasks();
}, []);

const fetchTasks = async () => {
  const res = await axios.get(
    "http://localhost:5000/api/tasks"
  );

  settasks(res.data);
};
  const addTask = async (taskname) => {
  const res = await axios.post(
    "http://localhost:5000/api/tasks",
    {
      title: taskname,
    }
  );
  settasks(prev => [...prev, res.data]);
};

  const toggleTask = async (id) => {
  await axios.put(
    `http://localhost:5000/api/tasks/${id}`
  );
  fetchTasks();
};

const deleteTask = async (id) => {
  await axios.delete(
    `http://localhost:5000/api/tasks/${id}`
  );
  fetchTasks();
};

const pendingTasks = tasks.filter(task => !task.completed);

const completedTasks = tasks.filter(task => task.completed);

  return (
    <>
      <h1 className='mt-1 text-center text-4xl'>ToDoist</h1>
      <div className="container mx-auto bg-violet-100 w-2xl bg-center mt-2 pt-2 rounded-2xl">
        <TaskForm addTask={addTask} />
        <h1 className='mt-5 text-xl font-medium p-1 pl-6'>Your Todos:</h1>
        <TaskList tasklist={pendingTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        <h1 className='mt-5 text-xl font-medium p-1 pl-6'>Completed Todos:</h1>
        <TaskList tasklist={completedTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App
