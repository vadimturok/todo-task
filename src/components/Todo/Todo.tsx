import React, { useEffect, useState } from 'react'
import TodoList from '../TodoList/TodoList'
import './todo.css'
import { useAppDispatch, useAppSelector } from '../../store'
import { addTodo, editTodo, Todo } from '../../store/reducers/todos/todosSlice'
import { nanoid } from 'nanoid'
import TodoForm from '../TodoForm/TodoForm'

const TodoComponent = () => {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todos)
    const editingTodo = todos.find(todo => todo.isEditing === true)
    const [text, setText] = useState('')

    const onSubmit = () => {
        if(editingTodo){
            const editedTodo: Todo = {...editingTodo, title: text}
            dispatch(editTodo(editedTodo))
            setText('')
            return;
        }
        const newTodo: Todo = {
            id: nanoid(),
            title: text,
            completed: false,
            isEditing: false
        }
        dispatch(addTodo(newTodo))
        setText('')
    }

    useEffect(() => {
        if(editingTodo){
            setText(editingTodo?.title)
        }
    }, [editingTodo])

  return (
    <div className='todo'>
        <div className='todoTop'>
            Todos ({todos.length})
        </div>
        <div className='todoMain'>
            <TodoForm text={text} onChange={setText} onSubmit={onSubmit}/>
            {todos.length > 0 ?  
                <div className='todoList'>
                    <TodoList todos={todos}/>
                </div> :
                <div className='noTodos'>No todos</div>
            }
        </div>
    </div>
  )
}
export default TodoComponent
