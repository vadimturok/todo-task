import {configureStore} from "@reduxjs/toolkit";
import todosReducer, { loadState } from './reducers/todos/todosSlice'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
    devTools: true,
    reducer: {
        todos: todosReducer
    },
    preloadedState: loadState()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector