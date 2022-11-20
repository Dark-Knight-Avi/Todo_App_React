import React from 'react'

function Todositem({onDelete, taskId, taskTitle, taskDesc}) {
  return (
    <div className="todos__task flex items-center justify-around w-[100%] my-5">
        <div className="todos__task-id text-xl font-bold">{taskId}.</div>
        <div className="todos__task-title text-xl font-bold">{taskTitle}</div>
        <div className="todos__task-desc">{taskDesc}</div>
        <button className="todos__todos-task_add px-10 text-xl border border-black rounded-md py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white" onClick={() => onDelete(taskId)}>Delete</button>
    </div>
  )
}

export default Todositem