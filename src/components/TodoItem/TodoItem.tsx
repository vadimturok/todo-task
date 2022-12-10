import React, { FC } from 'react'
import './todoItem.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo, setEditing, Todo, toggleComplete } from '../../store/reducers/todos/todosSlice';
import { useAppDispatch } from '../../store';

const TodoItem: FC<{todo: Todo}> = ({todo}) => {
    const dispatch = useAppDispatch()
  return (
    <div className='todoItem'>
        <div className='todoItemInfo'>
            <input onChange={() => dispatch(toggleComplete(todo))} checked={todo.completed}  type="checkbox"/>
            <div className='todoItemText'>{todo.title}</div>
        </div>
        <div className='todoItemActions'>
            <div onClick={() => dispatch(setEditing(todo.id))} className='actionsButton editButton'>
                <EditIcon/>
            </div>
            <div onClick={() => dispatch(removeTodo(todo.id))} className='actionsButton removeButton'>
                <DeleteIcon/>
            </div>
        </div>
    </div>
  )
}
export default TodoItem
