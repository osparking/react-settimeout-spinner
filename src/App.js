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
      }, 1000);
    }

    return () => {
      // Clearing a timeout
      clearTimeout(timerId.current);
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
