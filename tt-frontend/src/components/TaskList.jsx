import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


const TaskList = ({tasklist,toggleTask,deleteTask}) => {
  return (
    <div>
      {tasklist.map(task=>(
        <div key={task._id} className='flex items-center justify-between p-3 pl-6 pr-6 bg-violet-400 rounded-lg my-2'>
          <div className='flex items-center gap-3'>
            <input type="checkbox" checked={task.completed} onChange={(e)=>toggleTask(task._id)} className='p-1'/>
            <span className={ (task.completed ? 'line-through' : "")}>{task.title}</span> 
          </div>
          <button onClick={(e)=>deleteTask(task._id)} className='bg-violet-600 text-white px-3 py-1 rounded hover:bg-violet-700 cursor-pointer'><MdDeleteOutline></MdDeleteOutline></button>
        </div>
      ))}
    </div>
  )
}

export default TaskList
