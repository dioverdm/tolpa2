import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../../slices/userSlice';
import { getConversation } from "../../../slices/chatSlice"
import Contact from './Contact';

function ContactList() {
    const dispatch = useDispatch();
    const { contactList } = useSelector((state) => state.user);


    const getChat = (id) => {
        console.log({ id });
        dispatch(getConversation(id));

    }


    useEffect(() => {
        dispatch(getContactList());
    }, [dispatch]);

    return (
        <>
            <div className='py-2'>
                {
                    contactList.map((contact) => (
                        <Contact key={contact.id} contact={contact} getChat={getChat} />
                    ))
                }
            </div>
        </>
    );
}

export default ContactList;
