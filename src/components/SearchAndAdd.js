import React, {Component} from 'react';

export default class SearchAndAdd extends Component {

    showModal() {
        document.querySelector('.overlay').style.display = 'block';
    }

    render() {
        return(
            <>
                <div className="header">
                    <input type="text" className="search" placeholder="Найти контакт..." />
                    <button 
                        type="button"
                        className="btn-star btn-sm"
                        onClick = {() => this.showModal()}>
                        <i className="fa fa-user-plus"></i>
                    </button>
                </div>
            </>
        )
    }
}