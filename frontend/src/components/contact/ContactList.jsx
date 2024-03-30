import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../slices/userSlice';
import { getConversation, setChatWith } from "../../slices/chatSlice"
import Contact from './Contact';
import { useSocketContext } from '../../context/socketContext';

function ContactList() {
    const dispatch = useDispatch();
    const { contactList, searchedUser } = useSelector((state) => state.user);
    const { searchInput } = useSelector((state) => state.util);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const { onlineUsers } = useSocketContext();

    const handleChatWith = (contact) => {
        setSelectedContactId(contact._id);
        dispatch(setChatWith(contact));
        dispatch(getConversation(contact._id));
    }

    useEffect(() => {
        dispatch(getContactList());
    }, [dispatch]);

    return (
        <>
            <div className='py-2'>
                {
                    (searchInput !== "") ? (
                        searchedUser.length !== 0 ? (
                            searchedUser.map((contact) => (
                                <Contact
                                    key={contact._id}
                                    contact={contact}
                                    isSelected={contact._id === selectedContactId}
                                    handleChatWith={handleChatWith}
                                />
                            ))
                        ) : (
                            <div className='flex justify-center'>
                                <p>NO USER FOUND</p>
                            </div>
                        )
                    ) : (
                        contactList.map((contact) => (
                            <Contact
                                key={contact._id}
                                contact={contact}
                                isSelected={contact._id === selectedContactId}
                                handleChatWith={handleChatWith}
                                isOnline={onlineUsers.includes(contact._id)}
                            />
                        ))
                    )
                }
            </div>

        </>
    );
}

export default ContactList;
