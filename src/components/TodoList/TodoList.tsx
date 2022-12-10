import React, { FC } from 'react'
import { Todo } from '../../store/reducers/todos/todosSlice'
import TodoItem from '../TodoItem/TodoItem'
import './todoList.css'

const TodoList: FC<{todos: Todo[]}> = ({todos}) => {
  return (
    <div>
        {todos.map(todo => <TodoItem todo={todo}/>)}
    </div>
  )
}
export default TodoList
