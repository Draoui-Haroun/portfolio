
"use client";
import { useTheme } from "../context/ThemeContext";
import { HiMiniSun, HiMiniMoon   } from "react-icons/hi2";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();
    
    return(
        <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark"
                ? < HiMiniSun className="theme-icon" />
                : <HiMiniMoon className="theme-icon" />
            }
        </button>
    )
}