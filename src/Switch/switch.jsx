import React, { useState } from 'react';
import './Theme.css';  

const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-theme');
    };

    return (
        <label className="theme-switcher">
            <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeSwitcher;
