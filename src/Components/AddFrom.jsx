import React,{useState} from 'react'

const AddFrom = ({addTodo}) => {
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
                <label>Add new task</label>
                <input type='text' onChange={handleChange} value={state.content}></input>
            </form>
        </div>
    )
}

export default AddFrom