import { useReducer } from "react";

const reducer = (state,action) =>{
    if(action.type === 'ride') return {money: state.money+10}
    if(action.type === 'fuel') return {money: state.money-10}
}

export default function UseReducer(){

    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div className="App">
            <br/>
            <hr/>
            <h1 style={{textAlign:"center"}}>USE RECUCER EXAMPLE</h1>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={()=>dispatch({type:'ride'})}>
                    A new Customer
                </button>
                <button onClick={()=>dispatch({type:'fuel'})}>
                    Refill the tank!
                </button>
            </div>
            <br/>
            <br/>
        </div>
    )
}