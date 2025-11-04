import {createRoot} from "react-dom/client";
import {App} from "./App";
import { BrowserRouter } from "react-router";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<BrowserRouter><App /></BrowserRouter>);