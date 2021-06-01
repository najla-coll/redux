import React , {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import add from './ComponentRedux/action/action'
import {Button} from 'react-bootstrap'

const Task = () => {
    const[todo,setTodo]=useState (' ')

    const todoVar = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const change=(e)=>
    {
        setTodo(e.target.value)
    }
    return (
       
        <div>
             
            <input   type='text'     onChange = {change}   />
            {/* <button onClick={()=>dispatch(add(todo))} >Add</button> */}
            <Button variant="secondary" size="lg" active  onClick={()=>dispatch(add(todo))}>
                          Add
            </Button>
           
            {todoVar.map(el=>
                <li>{el}</li>
                )}
        </div>
    )

}

export default Task
