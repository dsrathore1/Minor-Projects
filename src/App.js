import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";

import "./App.css";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (<DotLoader size={80} color={'#F5A623'} loading={loading} />) : (
          <h1>Hello World</h1>
        )}
      </div>
    </>
  );
}

export default App;
