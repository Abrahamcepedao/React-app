import React, { useState } from 'react';

function Counter(){
    const  [count, setCount] =  useState(0);
    const [isHappy, setIsHappy] = useState(true);
    const changeMood = () =>  setIsHappy(!isHappy);
    return (  
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h3>{isHappy ? ":)" : ":("}</h3>
            <button onClick={changeMood}>Change mood</button>
        </div>
    )
}

export default Counter;