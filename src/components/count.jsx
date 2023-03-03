import { useState, useRef, useEffect } from "react";

function useInterval(callback, delay) {
  // 타이머를 이렇게 써야 하다니 ㅅㅂ
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Count({ count, handleSetCount }) {
  //let [count, setCount] = useState(0);
  //setCount(20);
  useInterval(() => {
    /*setCount((prev) => {
      return prev + 1;
    });*/
  }, 1000);
  const handleItemClick = () => {
    handleSetCount((prev) => {
      return prev + 1;
    });
  };
  console.log("COUNT ::", count);
  /*setInterval(() => {
    setCount((prev) => {
      console.log(prev);
      return prev + 1;
    });
  }, 1000);*/

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleItemClick}>+</button>
    </div>
  );
}

export default Count;
