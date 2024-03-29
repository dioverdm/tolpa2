import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../slices/userSlice';
import { getConversation, setChatWith } from "../../slices/chatSlice"
import Contact from './Contact';

function ContactList() {
    const dispatch = useDispatch();
    const { contactList } = useSelector((state) => state.user);
    const [selectedContactId, setSelectedContactId] = useState(null);

    const handleChatWith = (contact) => {
        setSelectedContactId(contact.id);
        dispatch(setChatWith(contact));
        dispatch(getConversation(contact.id));
    }

    useEffect(() => {
        dispatch(getContactList());
    }, [dispatch]);

    return (
        <>
            <div className='py-2'>
                {
                    contactList.map((contact) => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            isSelected={contact.id === selectedContactId}
                            handleChatWith={handleChatWith}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ContactList;
