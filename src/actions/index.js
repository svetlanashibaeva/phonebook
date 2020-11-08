const addContact = (name, tel) => {
    return {
        type: 'ADD_CONTACT',
        name,
        tel
    };
};

const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
        id: id
    };
}

export {addContact, deleteContact};