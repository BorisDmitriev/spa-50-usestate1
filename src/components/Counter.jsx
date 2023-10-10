import React from 'react'

export default function Counter(){

    const [count1, setCount1] = React.useState(0);

    function handleClick(){
       setCount1( count1 + 1 );
    }

    return(
        <div>
            <p>Count: {count1}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}