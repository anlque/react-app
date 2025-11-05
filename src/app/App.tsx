import './styles/index.scss'
import {NavLink} from 'react-router'
import {useTheme} from "./prodivers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/prodivers/router";

export const App = ()=> {
    const { theme, toggleTheme} = useTheme();
        return (
            <div className={classNames('app', {}, [theme])}>
                <button onClick={toggleTheme}>toggle</button>
                <NavLink to='/'>Main</NavLink>
                <NavLink to='/about'>About</NavLink>
               <AppRouter />
            </div>
        );
}
