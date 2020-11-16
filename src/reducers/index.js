const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Муж',
            tel: '+7 (922) 344 55 32'
        },
        {
            id: 2,
            name: 'Мама',
            tel: '+7 (373) 646 64 66'
        },
        {
            id: 3,
            name: 'Катя',
            tel: '+7 (343) 434 34 34'
        }
    ],
    filter: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            const newContact = {
                id: action.id,
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
            return {
                ...state,
                filter: action.filter.toLowerCase()
            }
        default:
            return state;
    }
}

export default reducer;