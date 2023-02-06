import {useState} from "react";
import "./Counter.css"

export default function Counter() {
    let [countArr, setCountArr] = useState([0]); // created this to get all the count values on acreen

    return (
        <div className="outer_container">
            <p>{countArr}</p>
            <div className="btn_container">
            <button onClick={()=>{
                setCountArr([...countArr,countArr[countArr.length-1]+1]);
            }
        }>Increase count</button>

            <button onClick={()=>{
                setCountArr([0]);
                }}>Reset count</button>

            <button onClick={()=>{
                setCountArr(countArr.slice(0,countArr.length-1));
                }} disabled={countArr.length===1}>Decrease count</button> 

            </div>
        </div>
    )
}