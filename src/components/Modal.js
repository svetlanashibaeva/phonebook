import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addContact} from '../actions';

class Modal extends Component{

    componentDidMount() {
        this.inputMask();
    }

    closeModal() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('#input-name').value = '';
        document.querySelector('#input-phone').value = '';
        document.querySelector('.form-add').removeChild(document.querySelector('.warn'));
    };

    addNewContact(e) {
        e.preventDefault();
        const {addContact, contacts} = this.props;
        
        const inputName = document.querySelector('#input-name').value;
        const inputPhone = document.querySelector('#input-phone').value;

        let div = document.createElement('div');
        div.classList.add('warn');

        if (inputName === '' || inputPhone === '') {
            div.textContent = "Заполните поля формы!";
            document.querySelector('.form-add').appendChild(div);
        } else if (contacts.find(contact => contact.name === inputName || contact.tel === inputPhone) !== undefined) { 
            div.textContent = "Такой контакт уже существует";
            document.querySelector('.form-add').appendChild(div);
        } else {
            addContact(inputName, inputPhone);
            this.closeModal();
        }
    }

    inputMask() {
        const inputPhone = document.querySelector('#input-phone');

        inputPhone.addEventListener('input', (e) => {
            let matrix = '+7 (___) ___ __ __';
            let i = 0,
                def = matrix.replace(/\D/g, ''),
                value = inputPhone.value.replace(/\D/g, '');
        
            if (def.length >= value.length) {
                value = def;
            }

            inputPhone.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
            });
    
            if (e.type === 'blur') {
                if (inputPhone.value.length == 2) {
                    inputPhone.value = '';
                }
            } else {
                setCursorPosition(inputPhone.value.length)
            }
        });
    };

    render() {
        return (
            <>
            <div className="overlay">
                <div className="modal">
                    <div className="modal-close" onClick={() => this.closeModal()}>&times;</div>
                    <form className="form-add" action="#">
                        <input name="name" id="input-name" type="text" placeholder="Введите имя" />
                        <input name="phone" id="input-phone" placeholder="Введите телефон" />
                        <button 
                            className="btn button-add" 
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
