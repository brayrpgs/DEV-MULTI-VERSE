import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import {Theme as ThemeEnum} from '../../enums/Theme'

/**
 * this component is used to display and toggle the current theme
 * it is a stateful component that uses the ThemeContext to get the current theme and the toggleTheme method
 * @returns 
 */
export const Theme = () => {
  const theme = useContext(ThemeContext)

  const handleThemeToggle = () => {
    if (theme?.theme == ThemeEnum.Light) {
      theme.toggleTheme(ThemeEnum.Dark)
    } else {
      theme?.toggleTheme(ThemeEnum.Light)
    }
  }
  return (
    <div>
      <p>Current Theme: {theme?.theme}</p>
      <button className="glass" onClick={handleThemeToggle}>Toggle Theme</button>
    </div>
  )
}
