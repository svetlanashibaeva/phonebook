import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import Hoc from './Hoc';
// import Modal from './Modal';

class ContactList extends Component {

    render() {
        const {contactItems} = this.props;
        return (
            <>
                <div className="list">
                {
                    contactItems.map(contactItem => {
                       return <ContactItem key={contactItem.id} contactItem={contactItem} />
                    })
                }    
                </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contactItems: state.contacts
    }
};

export default Hoc() (connect(mapStateToProps)(ContactList));