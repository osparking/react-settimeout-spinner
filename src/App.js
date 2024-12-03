// Filename - App.js

import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [showWarning, setShowWarning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (showWarning) {
      //Creating a timeout
      timerId.current = setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }

    // 이 콜백함수가 반환하는 함수는 언제 실행되는가?
    // useEffect 가 종속된 상태인 showWarning 이 위 제 14행에 의해
    // false 값으로 변할 때.
    return () => {
      // Clearing a timeout
      if (timerId.current !== null) {
        console.log("콜백함수 반환 함수 실행됨!", timerId.current);
        clearTimeout(timerId.current);
      }
    };
  }, [showWarning]);

  function handleClick() {
    setShowWarning(true);
  }

  return (
    <div className="warn">
      {showWarning && <div className="warningMsg">This is a Warning !</div>}
      <button className="btn" onClick={handleClick}>
        Show Warning
      </button>
    </div>
  );
};
export default App;
