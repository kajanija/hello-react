import "./index.css"
import { useState, useEffect } from "react"

function App() {
  
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  },[isDark]);

  return (
    <div className="div">
      <h1 className="title">Hello react app</h1>
      <button onClick={() => setIsDark(!isDark)} className="button">Toggle theme</button>
    </div>
  )
}

export default App
