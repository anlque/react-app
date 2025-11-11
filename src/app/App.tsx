import './styles/index.scss'
import {useTheme} from "./prodivers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/prodivers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

export const App = ()=> {
    const { theme} = useTheme();
        return (
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback=''>
                    <Navbar />
                    <div className='content-page'>
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        );
}
