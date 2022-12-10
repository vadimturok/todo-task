import React from 'react'
import TodoComponent from './components/Todo/Todo'
import {store} from './store/index'
import {debounce} from 'debounce'
import {saveState} from './store/reducers/todos/todosSlice'

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

const App = () => {
  return <TodoComponent/>
}

export default App
