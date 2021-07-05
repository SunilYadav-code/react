import react, {useState} from "react";
const App=()=>{
    let time=new Date().toLocaleTimeString();
    const [ctime ,setCtime]= useState(time);

    const upDateTime=()=>{
        time= new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(upDateTime, 1000);
    return(
        <>
        <h1> {ctime}</h1>
    {/* <button>Get Time</button> */}
        </>

    );
}
export default App;
    
   