import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./components/App";
import PhonebookContext from "./components/PhonebookContext";
import ErrorBoundry from './components/ErrorBoundry';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PhonebookContext.Provider >
                <App />
            </PhonebookContext.Provider> 
        </ErrorBoundry>      
    </Provider>
    , document.getElementById("root"));