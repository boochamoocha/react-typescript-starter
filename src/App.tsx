import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [inputValue, setValue] = useState<string>('')
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div><button onClick={() => setCount(count + 1)}>{count}</button></div>
      <div><input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)} /></div>
    </div>
  );
}
