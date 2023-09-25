import React from 'react'

const ShowTask = ({tasklist, setTasklist ,task,setTask}) => {

    
    function handleEdit(id){
        const editSelected = tasklist.find((todo)=> todo.id === id)
        setTask(editSelected)
        // console.warn(editSelected)

    }
    function handleDelete(id){
        const updatedList = tasklist.filter(todo =>todo.id !== id)
        setTasklist(updatedList)
    }

  return (
    
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() =>setTasklist([])}>Clear All</button>
            </div>
            <ul>
                    
                        {tasklist.map((todo) =>(
                            <li key={todo.id}>
                             <p>
                             <span className="name">{todo.name}</span>
                             <span className="time">{todo.time}</span>
                         </p>
                         <i onClick={() =>handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                         <i onClick={() =>handleDelete(todo.id)} className="bi bi-trash"></i>
                         </li>
                        ))}                  
            </ul>
        </section>
  )
}

export default ShowTask


