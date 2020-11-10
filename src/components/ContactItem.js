import React from 'react';

const ContactItem = ({contactItem, onDelete}) => {
    const {name, tel, id} = contactItem;
    return (
        <>
            <div className="list-item">
                <div className="contact">
                    <div className="name-contact">{name}</div>
                    <div className="number">{tel}</div>
                </div>
                
                <div className="icons">
                    <button 
                        type="button"
                        className="btn"
                        onClick = {() => onDelete(id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div> 
            <hr></hr>  
        </>
    )
};

export default ContactItem;
 