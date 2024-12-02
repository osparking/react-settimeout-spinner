// Filename - App.js

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("환. 범이비누 .영");
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <div className="spinner">Loading.....</div>;
  } else {
    return <div className="container">{data}</div>;
  }
};
export default App;
