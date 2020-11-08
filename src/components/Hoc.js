import React from 'react';
import PhonebookContext from './PhonebookContext';

const Hoc = () => (Wrapped) => { 
    return (props) => {  
        return (
            <PhonebookContext.Consumer>
                {
                    () => {
                        return <Wrapped {...props} />
                    }
                }
            </PhonebookContext.Consumer>
        )
    }
};

export default Hoc;