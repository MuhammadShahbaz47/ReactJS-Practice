// Common Event Handling

// function Btn(){
//     const eventHandler = () => console.log("click")
//     return(
//         <button onClick={eventHandler}>Click me</button>
//     )
// }

// export default Btn;

function Btn(){
    const eventHandler = () => console.log("Hover")
    return(
        <button onMouseOver={eventHandler}>Click me</button>
    )
}

export default Btn;