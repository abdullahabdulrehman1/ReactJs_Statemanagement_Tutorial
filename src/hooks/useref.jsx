import react, { useEffect, useRef, useState } from "react";

export default function Userefhook() {
  const useRef = () => {
    const [data, setdata] = useState("");
 
    return (
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <div>counting: {counts}</div>
        <h1>be </h1>
      </div>
    );
  };
}
