import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";


type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState <AvailableThemes>(()=>{
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIco ={
        dark:<SunIcon/>,
        light:<MoonIcon/>
    }
    function handleThemaChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme ==='dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }
     useEffect(() => {
        document.documentElement.setAttribute('data-theme',theme);
        localStorage.setItem('theme', theme);
     },[theme]);

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}>
                <HouseIcon/>
            </a>
            <a href="#" className={styles.menuLink}>
                <HistoryIcon/>
            </a>
            <a href="#" className={styles.menuLink}>
                <SettingsIcon/>
            </a>
            <a href="#" onClick={handleThemaChange} className={styles.menuLink}>
                {nextThemeIco[theme]}
            </a>
        </nav>
    )
}