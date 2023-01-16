// Conditonal Rendering defines what to Render and what not to

export default function ConditionalRendering(){
    const time = new Date();
    const day = time.toLocaleString("en-us",{weekday:'long'})
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

    if(day.toLowerCase()==="monday"){
        dayMessage = `Happy ${day}`
    }
    else if(day.toLowerCase()==="friday"){
        dayMessage = `Happy Blessed ${day}`
    }
    else{
        dayMessage="Stay Calm"
    }

    return(
        <div>
            <h1>
                {dayMessage}
            </h1>
            {morning ? <h2>Have Breakfast</h2> : <h2>Have Dinner</h2>}
        </div>
    )
}