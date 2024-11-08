import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {

  let [todoList, setTodo] = useState([])
  let [todoValue, setTodoValue] = useState('');
 

  function persisit(newList){
    localStorage.setItem('todoList', JSON.stringify({todoList:newList}))
  }
  function handleToDo(newTodo){
    const newToDoList = [...todoList, newTodo];
    persisit(newToDoList)
    setTodo(newToDoList)
  }
  function handleDeletetoDo(index){
    const newToDoList = todoList.filter((todo, todoIndex)=>{
      return index !== todoIndex
    })
    persisit(newToDoList)
    setTodo(newToDoList)
  }
  function handleEdittoDo(index){
    const valuetoBeEdited = todoList[index]
    setTodoValue(valuetoBeEdited) 
    handleDeletetoDo(index)
  }
  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodo = localStorage.getItem('todoList');
    if(!localTodo){
      return
    }
     localTodo = JSON.parse(localTodo).todoList
     setTodo(localTodo)
  },[]);
  return (
    <div>
     <TodoInput handleToDo={handleToDo} todoValue={todoValue} setTodoValue={setTodoValue}/>
     <TodoList handleDeletetoDo={handleDeletetoDo} handleEdittoDo={handleEdittoDo} todoList={todoList}/>
    </div>
  )
}
