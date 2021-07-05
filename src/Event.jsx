import React, {useState} from 'react';
const Event=()=>{
    const Purple='purple';
    const [bg,setBg]=useState(Purple);
    const [name,setName]=useState("click Me");
    const bgChange=()=>{
        let newBg='green';
        setBg(newBg);
        setName(" I love you!");
    };
    const bgBack=()=>{
setBg(Purple);
setName("Wow!");
    };
    return(
<>
<div style={{backgroundColor:bg}}></div>
    <button onClick={bgChange} onDoubleClick=
    {bgBack}>{name}</button>
</>
    );
}
export default Event;