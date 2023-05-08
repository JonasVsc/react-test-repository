import React from "react";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "add-task":
            return {
                tasks: [ ...state.tasks, {name: action.inputValue}]
            }
        default:
            return state
    }
}


const UseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, { tasks: [] })
    const [inputValue, setInputValue] = useState("")

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <div>
                <input onChange={(e) => {setInputValue(e.target.value)}}/>
                <button onClick={() => dispatch({type: "add-task", inputValue })}>Adicionar</button>
            </div>
            {state.tasks.map((task) => <p>{task.name}</p>)}
        </div>
    )
}

export default UseReducer;