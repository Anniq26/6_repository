import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useDetectDevice from "./useDetectDevice";
import useWindowResize from "./useWindowSize";


function ToggleBtn() {
    const[theme, setTheme] = useLocalStorage('theme','light');
    const device = useDetectDevice();
    const {width} = useWindowResize();

const toggleTheme = () => {
    if (device) {
        const newTheme = theme === 'light' ? 'dark' : 'light'; 
        setTheme(newTheme);
    }
};
useEffect (() => {
    document.body.className = theme;
}, [theme]);

return (
    <div className="btn">
        {device && <button onClick={toggleTheme} className="button">Toggle Theme</button>}
    </div>
);

}

export default ToggleBtn