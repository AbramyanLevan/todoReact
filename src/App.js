import React,{useEffect, useState} from 'react';
import Todos from './Components/Todos'
import AddForm from './Components/AddFrom'
import Footer from './Components/Footer';

const App = () => {

//initialization
const [todos,setTodos] = useState([])
const [toggle, setToggle] = useState(true)
const [exs,setExist] = useState(false)
const [left,setLeft] = useState(0)
const [filt,setFilt] = useState(todos)

//Functions
const deleteTodo = (id) => {
  console.log(id);
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos)
  setFilt(newTodos)
}
const addTodo = (todo) => {
  todo.id = Math.random();
  todo.status = false;
  todo.class = 'simple';
  let todosNew = [...todos, todo]
  setTodos(todosNew)
  setFilt(todosNew)

}
const handleCheck = (todo) => {
  todo.status = !todo.status
  if (todo.status === true){
    todo.class = 'lined-span'
  }else{todo.class='simple'}
  let todosNew = todos.map(elem=>{
    if(elem.id === todo.id){
      elem = todo;
    }
    return elem
  })
  setTodos(todosNew)
  setFilt(todosNew)
}
const toggleAll = () => {
  setToggle(!toggle)
 const todosNew = todos.map(todo => {
    if (toggle === true){
      todo.status = true;
      todo.class = 'lined-span'
    }else{
      todo.status = false;
      todo.class = 'simple'
    }
    return todo;
  })
  setTodos(todosNew)
  setFilt(todosNew)
}
const existChecked = () => {
  let res = false;
  todos.forEach(todo => {
    for(let i=0;i < todos.length;i++){
      if(todo.status === true)
      res = true;
      break;
    }
  })
 
  setExist(res)
}
const deleteAll = () => {
  let todosNew = todos.filter(todo => {
    return todo.status === false
  })
  setTodos(todosNew)
  setFilt(todosNew)
  if(todosNew.length === 0) {
    setToggle(!toggle)
  }
}
const counter = () => {
  let res = todos.filter(todo =>{
    return todo.status === false
  })
  setLeft(res.length)
}
//FILTER BUTTONS
const showAll = () => {
  setFilt(todos)
}
const showCompleted = () => {
  let todosNew = todos.filter(todo=>{
      if(todo.status === true){
        return todo
      }
  })
  setFilt(todosNew)
}
const showNotCompleted = () => {
  let todosNew = todos.filter(todo=>{
      if(todo.status === false){
        return todo
      }
  })
  setFilt(todosNew)
}


useEffect(()=>{
  existChecked()
  counter()
})
  return (
    <div className="todo-app container">
      <h1 className='center blue-text'>toDO</h1>
      <AddForm
        addTodo={addTodo}
        toggleAll={toggleAll}
        exist={exs}
        deleteAll={deleteAll}
      />
      <Todos
      todos={filt}
      deleteTodo={deleteTodo}
      handleCheck={handleCheck}
      />
      <Footer
      todos={todos}
       left={left}
       showAll={showAll}
       showCompleted={showCompleted}
       showNotCompleted={showNotCompleted}
      />
    </div>
  );
}

export default App;
