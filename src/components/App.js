import React from "react";
import SearchAndAdd from './SearchAndAdd';
import ContactsList from './ContactsList';

import '../styles/style.css';
import Modal from "./Modal";

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
