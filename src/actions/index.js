const addContact = (name, tel, id) => {
    return {
        type: 'ADD_CONTACT',
        name,
        tel, 
        id
    };
};

const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        id
    };
};

const searchContact = (filter) => {
    return {
        type: 'SEARCH_CONTACT',
        filter
    };
};



export {addContact, deleteContact, searchContact};