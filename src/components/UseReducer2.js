import React, { useReducer, useState } from 'react'


const reducer = (state, action) => {

}


const UseReducer2 = () => {
  const [inputValue, setInputValue] = useState("")

  const [state, dispatch] = useReducer(reducer, {task: []})

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{textAlign: "center"}}>TO-DO</h1>
      <input 
        style={{width: 400, height: 20}} 
        placeholder='Digite aqui sua tarefa'
        onChange={(e) => {setInputValue(e.target.value)}}
      />
      <button
        onClick={() => {dispatch({type: "add-task"})}}
      >Adicionar</button>
      {/* Tarefas */}
    </div>
  )
}

export default UseReducer2
