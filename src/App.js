import React, { useState } from "react";




const App= () => {
    const [count , setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };
    const IncNums = () => {
        setCount(count - 1);
    };
  
return(
    <>
       
    <h1>{count}</h1>
    <button onClick={IncNum}>➕</button>
    <button onClick={IncNums}>nagative</button>
   
        

</>
);
};
export default App;