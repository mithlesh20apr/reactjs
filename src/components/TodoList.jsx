import React from 'react'
import TOdoCard from './TOdoCard'

export default function TodoList(props) {
const {todoList} = props
 
  return (
   <ul className='main'>
    {todoList.map((todo,todoIndex)=> {
        return (
            <TOdoCard {...props}  key={todoIndex} index={todoIndex}>
                <p>{todo}</p>
            </TOdoCard>
         )
    })}
   </ul>
  )
}
