import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar";
import ChatSection from '../chat/ChatSection';
import ConatctInfo from '../contact/ContactInfo';
import { useSelector } from 'react-redux';

function Home() {
    const [isContactInfoHidden, setIsContactInfoHidden] = useState(true);
    const { chatWith } = useSelector((state) => state.chat);

    return (
        <div className="flex h-screen relative w-screen">
            {chatWith ? (
                <>
                    <div className={`sm:border-l w-full border-border ${!isContactInfoHidden ? 'hidden' : ''} `}>
                        <ChatSection setIsContactInfoHidden={setIsContactInfoHidden} />
                    </div>
                    <div className={`sm:border-l absolute h-full w-full top-0 right-0 transition-transform duration-200 ease-in transform ${!isContactInfoHidden ? 'translate-x-0' : 'translate-x-full hidden'}`}>
                        <ConatctInfo setIsContactInfoHidden={setIsContactInfoHidden} />
                    </div>
                </>
            ) : (
                <div className="sm:border-r-[0.5px] w-full border-gray-700">
                    <Sidebar />
                </div>
            )}
        </div>
    );
}

export default Home;
