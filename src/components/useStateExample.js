import { useState } from "react";

export default function UseStateExample(){
    const [inputText,setText] = useState('hello')

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <>  
            <br/>
            <hr/>
            <h1 style={{textAlign:"center"}}>USE STATE EXAMPLE</h1>

            <input value={inputText} onChange={handleChange}/>
            <p>{inputText}</p>
            <button onClick={()=>setText('hello')}>
                Reset
            </button>
        </>
    )
}