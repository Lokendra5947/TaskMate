import React from 'react'

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
    function handleSubmit(e) {
        e.preventDefault()
        
        if(task.id){
            const date = new Date()
            const updatedTaskList = tasklist.map((todo) =>(
                todo.id ===task.id?{id: date.getTime(),name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
            ))
                // "todo.id" selected item h "tasklist" ka. or "task.id" vo item h jo humne edit ke liye call kiya h  
             setTasklist(updatedTaskList)   
                setTask({})
        }
        else{
            const date = new Date()
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask])
    
            setTask({})
        }
    }


    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e =>setTask({...task, name:e.target.value})} value={task.name || ""} name='task' placeholder='Add Task' autoComplete='off' />
                <button type='submit'>{task.id ?"Update":"Add"}</button>
            </form>
        </section>
    )
}

export default AddTask
