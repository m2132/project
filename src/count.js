import React, { useState } from 'react'


export default function Count()
{
    const [count,setCount]=useState(0);
    const[plus,setPlus]=useState(1);
    const[arr,setArr]=useState([1,2,3]);
    function cnt()
    {
        setCount(count=>count+plus);
    }
    function cntP(e)
    {
        setPlus(Number(e.target.value))
    }
    function insertNum()
    {
        setArr(arr.concat(Math.floor(Math.random()*5)))
    }
    return(
        <>
    <label>{count}</label><br/><br/>
    <input onChange={cntP} type="number"></input><br/><br/>
    <button onClick={cnt}>click me</button>

    <div>
        <ul>
            {arr.map(item=><li key={item}>{item}</li>)}
        </ul>
    </div>
    </> 
    )
   
}