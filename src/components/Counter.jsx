import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="CounterButton" onClick={clickHandler}>
      You clicked me {counter} times
    </div>
  );
}

export default Counter;
