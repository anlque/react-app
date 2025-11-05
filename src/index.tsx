import {createRoot} from "react-dom/client";
import {App} from "app/App";
import { BrowserRouter } from "react-router";
import {ThemeProvider} from "app/prodivers/ThemeProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<BrowserRouter><ThemeProvider><App /></ThemeProvider></BrowserRouter>);