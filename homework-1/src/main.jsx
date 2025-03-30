import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './rtk/rtkStore.js';

createRoot(document.getElementById('root')).render(
    //Redux требует обернуть приложение в <Provider>
    //Zustand не требует оберток
    <Provider store={store}>
        <App />
    </Provider>,
);
