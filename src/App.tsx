import './styles/index.scss'
import {Button} from "./components/Button";
import {Routes, Route ,NavLink} from 'react-router'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

export const App = ()=> {
        return (
            <div className="app">
                TEST APP fdvdfv
                <Button />
                <NavLink to='/'>Main</NavLink>
                <NavLink to='/about'>About</NavLink>
                <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
                </Suspense>
            </div>
        );
}
