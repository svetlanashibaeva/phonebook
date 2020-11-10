import React from "react";
import SearchAndAdd from './SearchAndAdd';
import ContactsList from './ContactsList';
import Modal from "./Modal";

import '../styles/style.css';

const App = () => {
    return (
        <>
            <div className="container">
                <h1>Список контактов</h1>
                <SearchAndAdd />
                <ContactsList />
            </div>
            <Modal />
        </>
    );
}

export default App;
