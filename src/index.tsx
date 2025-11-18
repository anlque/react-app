import './shared/config/i18n/i18n';

import { App } from 'app/App';
import { ErrorBoundary } from 'app/prodivers/ErrorBoundary';
import { ThemeProvider } from 'app/prodivers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
