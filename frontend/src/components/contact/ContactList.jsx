import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../slices/userSlice';
import { getConversation, getLastMessage, setChatWith } from "../../slices/chatSlice"
import Contact from './Contact';
import { useSocketContext } from '../../context/socketContext';
import ContactSkeleton from '../skeleton/ContactSkeleton';

function ContactList() {
    const dispatch = useDispatch();
    const { contactList, searchedUser, loading } = useSelector((state) => state.user);
    const lastMessages = useSelector((state) => state.chat.lastMessages);
    const { searchInput } = useSelector((state) => state.util);
    const { chatWith } = useSelector(state => state.chat);
    const { onlineUsers } = useSocketContext();

    const handleChatWith = (contact) => {
        dispatch(setChatWith(contact));
        dispatch(getConversation(contact._id));
    }

    useEffect(() => {
        dispatch(getContactList());
    }, [dispatch]);

    useEffect(() => {
        contactList.forEach(contact => {
            dispatch(getLastMessage(contact._id));
        });
    }, [dispatch, contactList]);

    return (
        <>
            <div className='py-2'>
                {
                    loading ? (
                        <div>
                            <ContactSkeleton />
                            <ContactSkeleton />
                        </div>
                    ) : (
                        contactList.length !== 0 && !searchInput ? (
                            contactList.map((contact) => (
                                <Contact
                                    key={contact._id}
                                    contact={contact}
                                    isSelected={contact._id === chatWith?._id}
                                    handleChatWith={handleChatWith}
                                    isOnline={onlineUsers.includes(contact._id)}
                                    lastMessage={lastMessages[contact._id]}
                                />
                            ))
                        ) : (
                            searchInput !== "" ? (
                                searchedUser.length !== 0 ? (
                                    searchedUser.map((contact) => (
                                        <Contact
                                            key={contact._id}
                                            contact={contact}
                                            isSelected={contact._id === chatWith?._id}
                                            handleChatWith={handleChatWith}
                                        />
                                    ))
                                ) : (
                                    <div className='flex justify-center'>
                                        <p>NO USER FOUND</p>
                                    </div>
                                )
                            ) : (
                                <div className='flex justify-center'>
                                    <p>No chat available</p>
                                </div>
                            )
                        )
                    )
                }

            </div>

        </>
    );
}

export default ContactList;
