import React, { ChangeEvent, FC } from 'react'
import './todoForm.css'

const TodoForm: FC<{text: string, onChange: (val: string) => void, onSubmit: () => void}> = ({text, onChange, onSubmit}) => {
  return (
    <div className='todoForm'>
        <input 
            value={text} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} 
            className='todoInput' 
            type="text" 
        />
        <button onClick={onSubmit} disabled={!text.length} className='todoButton'>Submit</button>
    </div>
  )
}

export default TodoForm