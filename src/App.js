import React,{useState} from 'react';
import Todos from './Components/Todos'
import AddForm from './Components/AddFrom'

const App = () => {
const [todos,setTodos] = useState([

])
const deleteTodo = (id) => {
  console.log(id);
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos)
}
const addTodo = (todo) => {
  todo.id = Math.random();
  let todosNew = [...todos, todo]
  setTodos(todosNew )
}
  return (
    <div className="todo-app container">
      <h1 className='center blue-text'>toDO</h1>
      <AddForm
        addTodo={addTodo}
      />
      <Todos
      todos={todos}
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
