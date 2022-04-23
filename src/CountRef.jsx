import { useRef } from "react";

const CountRef = () => {
  let countRef = useRef(0);
  let inputRef = useRef("");

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  const handleClick = () => {
    console.log(`Button is pressed ${++countRef.current} times`);
  };

  return (
    <div>
      <p>useRef</p>
      <h3>{countRef.current}</h3>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter you name here"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        Click me to see increment in console
      </button>
    </div>
  );
};

export default CountRef;
