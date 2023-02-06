import React, { useState, useEffect } from "react";

function Autocounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [count, isRunning]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>Start</button>
      <button onClick={()=> setIsRunning(isRunning===false)}>Stop</button>
    </div>
  );
}

export default Autocounter;



// import { useEffect, useState } from "react";

// export default function Autocounter(){
//     const [count,setCount] = useState(0);

//     function handleStart(){
//       let interval =  setInterval(()=>{
//                 setCount((count)=>count+1)
//             },1000)

//            document.querySelector(".stop").addEventListener("click",()=>{
//             clearInterval(interval);
//            })
//     }

   
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button className="stop">Stop</button>
//         </div>
//     )
// }