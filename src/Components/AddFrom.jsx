import React,{useState} from 'react'
import '../index.css'

const AddFrom = ({addTodo,toggleAll,exist,deleteAll}) => {
    const [state,setState] = useState({
        content: ''
    })
    const handleChange = (e) => {
        setState({content:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(state)
        setState({content:''})

    }
    return(
        <div>
            <form id='todo' onSubmit={handleSubmit}>
                <label>Add new todo</label>
                <input type='text' onChange={handleChange} value={state.content}></input>
            </form>
             <div className='add-block'>
            <button className='toggle' onClick={()=>toggleAll()}><i class="material-icons">keyboard_arrow_down</i></button>
            {exist && <button onClick={()=>deleteAll()} className='toggle'>Clear complited</button>}
            </div>
        </div>
    )
}

export default AddFrom