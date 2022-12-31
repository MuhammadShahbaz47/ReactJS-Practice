export default function ModeToggler(){
    let darkModeOn = false
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick(){
        darkModeOn = !darkModeOn
        if (darkModeOn == true){
            console.log("Dark Mode is On")
        }
        else {
            console.log("Light Mode is On")
        }
    }
    return(
        <div>
            <br/>
            <hr/>
            <h1 style={{textAlign:"center"}}>onClick Mode Toggler Example</h1>

            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>click</button>
        </div>
    )
}