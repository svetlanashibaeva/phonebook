import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import {deleteContact} from '../actions';
// import Hoc from './Hoc';
// import Modal from './Modal';

class ContactList extends Component {

    render() {
        const {contacts, deleteContact} = this.props;
        return (
            <>
                <div className="list">
                {
                    contacts.map(contactItem => {
                       return <ContactItem key={contactItem.id} contactItem={contactItem} onDelete={deleteContact}/>
                    })
                }    
                </div>
                
            </>
        )
    }
}

const mapStateToProps = ({contacts}) => {
    return {
        contacts: contacts
    }
};

const mapDispatchToProps = {
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);