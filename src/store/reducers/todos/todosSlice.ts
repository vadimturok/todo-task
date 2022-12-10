import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
  }
}

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    isEditing: boolean;
}

interface TodosState{
    todos: Todo[]
}

const initialState: TodosState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state: TodosState, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state: TodosState, action: PayloadAction<Todo>) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[todoIndex] = action.payload
            state.todos[todoIndex].isEditing = false
        },
        toggleComplete: (state: TodosState, action: PayloadAction<Todo>) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[todoIndex].completed = !action.payload.completed
        },
        setEditing: (state: TodosState, action: PayloadAction<string>) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload)
            state.todos[todoIndex].isEditing = true
        }
    }
})

export const {
    addTodo,
    removeTodo,
    toggleComplete,
    editTodo,
    setEditing
} = todosSlice.actions

export default todosSlice.reducer