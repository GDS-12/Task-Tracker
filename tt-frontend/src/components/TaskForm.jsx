import React, { useState } from 'react'
import { MdAddTask } from "react-icons/md";

const TaskForm = ({addTask}) => {
  const [task,setTask] = useState("");
  const handleSubmit = ()=>{
    if(task.trim()==''){
      return;
    }
    addTask(task);
    setTask(""); 
  }

  return (
    <div className='flex gap-2 p-1 justify-center'>
      <input type="text" placeholder='Enter task' value={task} className='bg-white w-xl px-1' onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleSubmit} className='bg-violet-500 text-white px-3 py-1 rounded hover:bg-violet-600 cursor-pointer'><MdAddTask></MdAddTask></button>
    </div>
  )
}

export default TaskForm
