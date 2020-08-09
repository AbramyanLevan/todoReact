import React from 'react'
import '../index.css'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className='collection-item todo-form' key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                    <i onClick={()=>{deleteTodo(todo.id)}} class="material-icons delete">clear</i>
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