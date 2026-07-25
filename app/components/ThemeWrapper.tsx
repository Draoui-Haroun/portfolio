
"use client";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

export default function ThemeWrapper(){
    const {theme} = useTheme();
    useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

    return null;
}