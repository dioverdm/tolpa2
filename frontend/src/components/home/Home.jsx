import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar";
import ChatSection from '../chat/ChatSection';
import ConatctInfo from '../contact/ContactInfo';

function Home() {
    const [isContactInfoHidden, setIsContactInfoHidden] = useState(true);

    return (
        <div className="flex h-screen">
            <div className="w-1/4 border-r-[0.5px] border-gray-700">
                <Sidebar />
            </div>
            <div className="flex-1">
                <ChatSection setIsContactInfoHidden={setIsContactInfoHidden} />
            </div>
            <div className={`flex-1 border-l border-border ${isContactInfoHidden ? 'translate-x-full hidden' : 'translate-x-0'} transition-transform duration-500`}>
                <ConatctInfo setIsContactInfoHidden={setIsContactInfoHidden} />
            </div>
        </div>
    );
}

export default Home;
