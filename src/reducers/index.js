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
            const newContact = {
                id: Math.floor(1 + Math.random() * 10000),
                name: action.name,
                tel: action.tel
            }
            return {
                contacts: [...state.contacts, newContact]
            }
        case 'DELETE_CONTACT':
            const index = state.contacts.findIndex(contact => contact.id === action.id);
            return {
                contacts: [
                    ...state.contacts.slice(0, index),
                    ...state.contacts.slice(index + 1)
                ]
            }
        default:
            return state;
    }
}

export default reducer;