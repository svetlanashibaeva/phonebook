import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import {deleteContact} from '../actions';


class ContactList extends Component {

    render() {
        const {contacts, deleteContact, filter} = this.props;

        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().indexOf(filter) === 0);
        return (
            <>
                <div className="list">
                {
                    filteredContacts.length > 0 ?
                    filteredContacts.map(contactItem => {
                       return <ContactItem key={contactItem.id} contactItem={contactItem} onDelete={deleteContact}/>
                    }) : <div className="no-res">Нет результатов</div>

                }    
                </div>
                
            </>
        )
    }
}

const mapStateToProps = ({contacts, filter}) => {
    return {
        contacts,
        filter
    }
};

const mapDispatchToProps = {
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);