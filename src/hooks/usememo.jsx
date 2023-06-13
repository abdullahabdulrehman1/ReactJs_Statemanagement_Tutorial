import React,{useMemo,useState} from 'react'
function Usememohook(){
const [number] = useState([10,40,30,70,50]);
const total =useMemo( () => number.reduce((init,number)=>number+init,0),[number]);

const [names] =useState(["Abdullah","Ali","Zubair","Kaliya","Pakistan"]);
const sortedname = useMemo(()=>[...names].sort(),[...names]);
const [count, setcount] = useState(0)
const [count2, setcount2] = useState(0)
// const totals = useMemo(()=> (count+count2) , [count+count2]); it not goot use
const totals = count+count2; 

    return(<div>
        <h1>{total}</h1>
        <h1>{[...names].join(",")}</h1>
        <h1>{sortedname.join(" , ")}</h1>
        <button onClick={()=>setcount(count+1)}  style={{fontSize: '200'}}>Count: {count}</button>
        <button onClick={()=>setcount2(count2+1)}  style={{fontSize: '200'}}>Count:{ count2}</button>
        <div>{totals}</div>



    </div>);
}
export default Usememohook;     