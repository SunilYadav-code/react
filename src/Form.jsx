import React, { useState } from "react";
const Form=()=>{
    const [name,setName]=useState("");
    const [fullName,setFullName]=useState();
    const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    };
const onSubmit=()=>{
    setFullName(name);
}
return(
<>
<div>
<form onSubmit={onSubmit}>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter Your name" 
    onChange={inputEvent}
        value={name}
    />
    <button type="submit"> Click Me</button>
    </form>
</div>
</>
);
}
export default Form;