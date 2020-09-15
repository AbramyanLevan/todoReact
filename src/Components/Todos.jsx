import React, {useState} from 'react'
import '../index.css'

const Todos = ({todos, deleteTodo,handleCheck}) => {
 

    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className='collection-item todo-form' key={todo.id}>
                     <label>
                      <input type="checkbox" onClick={()=>handleCheck(todo)} checked={todo.status}/>
                      <span className={todo.class}>{todo.content}</span>
                     </label>
                    {/* <span>{todo.content}</span> */}
                    <i onClick={()=>{deleteTodo(todo.id)}} className="material-icons delete">clear</i>
                </div>
            )
        })
    ) : (
        <p className='center'>You have no todo's left</p>)

    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )
}

export default Todos;