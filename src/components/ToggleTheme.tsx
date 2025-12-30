import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "active"
  )

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode")
      localStorage.setItem("darkmode", "active")
    } else {
      document.body.classList.remove("darkmode")
      localStorage.removeItem("darkmode")
    }
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(prev => !prev)} id="theme-switch">
        <Moon size={18} />
        <Sun size={18} />
    </button>
  )
}

export default ThemeSwitch