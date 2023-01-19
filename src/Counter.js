import {useState} from "react";
import "./Counter.css"

export default function Counter() {
    let [count, setCount] = useState(4);
    let [countArr, setCountArr] = useState([4]); // created this to get all the count values on acreen

    return (
        <div className="outer_container">
            <h1>{count}</h1>
            <p>{countArr}</p>
            <div className="btn_container">
            <button onClick={()=>{
                setCount(count+1);
                setCountArr([...countArr,count+1]);
            }
        }>Increase count</button>
            <button onClick={()=>{
                setCount(0);
                setCountArr([]);
                }}>Reset count</button>

            <button onClick={()=>{
                setCount(count-1);
                // setCountArr([...countArr,count-1])
                setCountArr(countArr.slice(0,countArr.length-1));
                }} disabled={count===0}>Decrease count</button> 
            </div>
        </div>
    )
}