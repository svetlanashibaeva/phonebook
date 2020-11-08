import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addContact} from '../actions';

class Modal extends Component{

    closeModal() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('#input-name').value = '';
        document.querySelector('#input-phone').value = '';
    };

    addNewContact(e) {
        e.preventDefault();
        const {addContact, contacts} = this.props;
        const inputName = document.querySelector('#input-name').value;
        const inputPhone = document.querySelector('#input-phone').value;

        if (inputName === '' || inputPhone === '') {
            console.log('не заполнено')
        } else if (contacts.find(contact => contact.name === inputName || contact.tel === inputPhone) !== undefined) {
            console.log('уже есть')
        } else {
            addContact(inputName, inputPhone);
            this.closeModal();
        }
    }

    render() {
        return (
            <>
            <div className="overlay">
                <div className="modal">
                    <div className="modal-close" onClick={() => this.closeModal()}>&times;</div>
                    <form className="form-add" action="#">
                        <input name="name"  id="input-name" type="text" placeholder="Введите имя" />
                        <input name="phone" id="input-phone" placeholder="Введите телефон" />
                        <button 
                            className="button-add" 
                            onClick={(e) => this.addNewContact(e)}> Добавить</button>
                    </form>
                </div>
            </div>
            </>
        )
    }  
};

const mapStateToProps = ({contacts}) => {
    return {
        contacts
    }
};

const mapDispatchToProps = {
    addContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
