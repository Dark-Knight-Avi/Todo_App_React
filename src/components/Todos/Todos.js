import React, {useState} from 'react'
import { Todositem } from '../exports'

function Todos() {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const onDelete = (taskId) => {
        const newtasks = tasks.filter(task => task.id !== taskId)
        let i = 1
        newtasks.map((task) => {
            task.id = i++;
            return task;
        })
        setTasks(newtasks)
    }
    const onClickHandler = (e) => {
        let newTask = {
            id: tasks.length + 1,
            title: title,
            desc: desc
        }
        setTasks([...tasks, newTask])
    }
    return (
        <div className="todos__todos flex flex-col my-5  p-5 w-[100vw]">
            <div className="todos__todos-task w-[100%] flex items-end">
                <div className="todos__todos-task_details flex justify-start w-[100%] items-center">
                    <div className="px-5 mx-3 todos_todos-task_details_input flex flex-col w-[50%]">
                        <label className="text-xl my-3" htmlFor="todos_todos-task_details-input">Enter task title here:</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} name="todos_todos-task_details-input" id="todos_todos-task_details-input" className="border border-black rounded-md outline-none p-2" placeholder="Enter task title" />
                    </div>
                    <div className="px-5 mx-3 w-[50%] todos__todos-task_details_desc flex flex-col">
                        <label className="my-3 text-xl" htmlFor="todos__todos-task_details-desc">Enter task description here:</label>
                        <input onChange={(e) => setDesc(e.target.value)} className="border border-black rounded-md outline-none p-2" placeholder="Enter task description" name="todos__todos-task_details-desc" id="todos__todos-task_details-desc"/>
                    </div>
                </div>
                <button onClick={onClickHandler} className="todos__todos-task_add mx-10 px-10 text-xl border border-black rounded-md py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white">Add</button>
            </div>
            <div className="todos__todos-task_view flex items-center flex-col justify-center my-10">
                <h1 className="my-5 text-3xl">Your tasks are listed below</h1>
                {tasks.map((task) => {
                    return <Todositem key={task.id} taskId={task.id} taskTitle={task.title} taskDesc={task.desc} onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default Todos