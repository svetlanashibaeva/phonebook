const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Igor',
            tel: '89223674836'
        },
        {
            id: 2,
            name: 'Mama',
            tel: '89223635836'
        },
        {
            id: 3,
            name: 'Katya',
            tel: '89223635898'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            const newId = state.contacts[state.contacts.length-1] + 1;
            return {
                contacts: state.contacts.concat(newId),
                contactsById: {
                    ...state.contactsById,
                    [newId]: {
                        id: newId,
                        name: action.name,
                        tel: action.tel
                    }
                }
            }
        default:
            return state;
    }
}

export default reducer;