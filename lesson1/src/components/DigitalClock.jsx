
import { useState } from "react"

function DigitalClock({stl}) {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
        
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            // console.log(time);
        }, 1000);

    return (
        <>
            <h1 style={{padding: "auto", width: "200px", height: "50px", backgroundColor: "white", borderRadius: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", color: "black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: "bold",...stl }}>{time}</h1>
        </>
    )
}


export default DigitalClock