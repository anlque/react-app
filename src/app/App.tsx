import './styles/index.scss'
import {Routes, Route ,NavLink} from 'react-router'
import {Suspense} from "react";
import {useTheme} from "./prodivers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const App = ()=> {
    const { theme, toggleTheme} = useTheme();
        return (
            <div className={classNames('app', {}, [theme])}>
                <button onClick={toggleTheme}>toggle</button>
                <NavLink to='/'>Main</NavLink>
                <NavLink to='/about'>About</NavLink>
                <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                </Suspense>
            </div>
        );
}
