const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Муж',
            tel: '89223674836'
        },
        {
            id: 2,
            name: 'Мама',
            tel: '89223635836'
        },
        {
            id: 3,
            name: 'Катя',
            tel: '89223635898'
        }
    ],
    filter: ""
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
                ...state,
                contacts: [...state.contacts, newContact]
            }
        case 'DELETE_CONTACT':
            const index = state.contacts.findIndex(contact => contact.id === action.id);
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, index),
                    ...state.contacts.slice(index + 1)
                ]
            }
        case 'SEARCH_CONTACT':
            // const name = action.name.toLowerCase();
            // const find = state.contacts.filter(contact => contact.name.toLowerCase().indexOf(name) === 0);

            return {
                ...state,
                filter: action.filter.toLowerCase()
            }
        default:
            return state;
    }
}

export default reducer;