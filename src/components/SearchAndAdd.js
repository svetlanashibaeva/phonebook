import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchContact } from '../actions';

class SearchAndAdd extends Component {

    showModal() {
        document.querySelector('.overlay').style.display = 'block';
    };

    render() {
        const {searchContact} = this.props;
        return(
            <>
                <div className="header">
                    <input type="text" className="search" placeholder="Найти контакт..." onChange={(e) => searchContact(e.target.value)}/>
                    <button 
                        type="button"
                        className="btn"
                        onClick = {() => this.showModal()}>
                        <i className="fa fa-user-plus"></i>
                    </button>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    searchContact
}

export default connect(null, mapDispatchToProps)(SearchAndAdd);