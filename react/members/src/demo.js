// import React from "react";
// import "./demo.css"
// const MyComponent = () => {
//     const [myName, setMyName] = React.useState('John Doe');
//     return <div><h2 className="title">{myName}</h2></div>
//         <input value={myName} onChange={(e) => setMyName}
// }
import React from "react";

export const MyComponent = () =>{
    const [username,setUsername] = React.useState("");
    React.useEffect(()=>{setTimeout(()=>)},1500)},[]) //ONLOAD
    return (
    <div><h4>{username}</h4>
    <input value={username} onChange={e => setUsername(e.target.value)}/>
    </div>
    )
}