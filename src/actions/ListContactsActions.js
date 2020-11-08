import * as types from '../constants/ActionTypes';

const addContact = (name, tel) => {
    return {
        type: types.ADD_CONTACT,
        name,
        tel
    };
};

const deleteContact = (id) => {
    return {
        type: types.DELETE_CONTACT,
        id
    };
}

export {addContact, deleteContact};