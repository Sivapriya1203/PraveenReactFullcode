import React, { useState, useEffect } from "react";

function Demo() {
  const [count, setCount] = useState(0);

  // MOUNTING (Runs only once)
  useEffect(() => {
    console.log("🟢 Component Mounted");

    // UNMOUNTING (cleanup)
    return () => {
      console.log("🔴 Component Unmounted");
    };
  }, []);

  // UPDATING (Runs whenever count changes)
  useEffect(() => {
    console.log("🔄 Component Updated, count =", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Demo;
