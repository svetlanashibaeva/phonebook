import React, { Component } from 'react';

export default class Modal extends Component{

    closeModal() {
        document.querySelector('.overlay').style.display = 'none';
    };

    render() {
        return (
            <>
            <div className="overlay" onClick={() => this.closeModal()}>
                <div className="modal">
                    <div className="modal-close" onClick={() => this.closeModal()}>&times;</div>
                    <form className="form-add" action="#">
                        <input name="name"  type="text" placeholder="Введите имя" />
                        <input name="phone" placeholder="Введите телефон" />
                        <button className="button-add">Добавить</button>
                    </form>
                </div>
            </div>
            </>
        )
    }  
};
