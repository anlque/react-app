import './styles/index.scss'
import {useTheme} from "./prodivers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/prodivers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export const App = ()=> {
    const { theme} = useTheme();
        return (
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        );
}
