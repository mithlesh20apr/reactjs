import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleToDo,todoValue, setTodoValue} = props;
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter todo...'/>
      <button onClick={() => {
        handleToDo(todoValue), setTodoValue('')
      }}>Add</button>
    </header>
  )
}
