import React,{useEffect,useState} from 'react'
export default function Useeffecthook ()  {
    const [name,setname] = useState(0);
    const [name1,setname1] = useState(0);
   useEffect(()=>{alert("hello happybirthdat")},[])

  return (<div>

    <h1 onClick={()=>{setname(name+1)}

}>click me {name}</h1>
<br />
<h1 onClick={()=>{setname1(name1+1)}

}>click me {name1}</h1>
  </div>);
}
