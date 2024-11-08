import React from 'react'

export default function TOdoCard(props) {
    const {children, handleDeletetoDo,index, handleEdittoDo} = props;
  return (
    <li className='todoItem'>
        {children}
        <button onClick={()=>{
        handleEdittoDo(index)
    }}>
        <i className="fa-solid fa-pen-to-square"> </i>
        </button>
    <button onClick={()=>{
        handleDeletetoDo(index)
    }}>
        <i className="fa-regular fa-trash-can"></i>
        </button>
    </li>
  )
}
