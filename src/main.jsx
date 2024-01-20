import React from 'react';
import ReactDOM from 'react-dom/client';

import '../normalize.css';
import './index.css';
import App from './App.jsx';
import './generic-media-query.css';

import GlobalProvider from './store/globalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
