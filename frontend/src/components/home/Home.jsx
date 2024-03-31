import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar";
import ChatSection from '../chat/ChatSection';
import ConatctInfo from '../contact/ContactInfo';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlankChat from '../chat/BlankChat';

function Home() {
    const [isContactInfoHidden, setIsContactInfoHidden] = useState(true);
    const { chatWith } = useSelector((state) => state.chat);
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <div className='flex relative h-screen'>
                <div className={`${toggleSidebar ? `hidden` : `sm:block`} ${chatWith ? `hidden` : ``} shrink-0 sm:w-[300px] w-full lg:w-[350px] sm:border-r-[0.5px] border-gray-700`}>
                    <div className={`relative w-full h-full ${toggleSidebar ? `hidden` : ``}`}>
                        <Sidebar />
                        <IoIosArrowBack onClick={() => setToggleSidebar(!toggleSidebar)} className="absolute sm:block hidden top-1/2 -right-5 cursor-pointer text-xl text-on-primary" />
                    </div>
                </div>
                <IoIosArrowForward onClick={() => setToggleSidebar(!toggleSidebar)} className={`absolute top-1/2 cursor-pointer text-xl text-on-primary ${toggleSidebar ? `` : `hidden`}`} />

                {chatWith ? (
                    <div className={`${chatWith ? `` : `hidden`} sm:flex flex-1`}>
                        <div className={`flex-1 h-full ${isContactInfoHidden ? `` : `lg:block hidden`}`}>
                            <ChatSection setIsContactInfoHidden={setIsContactInfoHidden} />
                        </div>
                        <div className={`sm:w-full lg:border-l border-border lg:flex-1 ${isContactInfoHidden ? `hidden` : ``}`}>
                            <ConatctInfo setIsContactInfoHidden={setIsContactInfoHidden} />
                        </div>
                    </div>
                ) : (
                    <div className='hidden w-full sm:block'>
                        <BlankChat />
                    </div>
                )}
            </div>

        </>
    );
}

export default Home;


// if (toggleSidebar) {
//     hidden
// }
// if (chatwith) {
//     hidden sm: block
// }


// for small screen when chatwithis ture make hidden , for large screen when chatwith is true do nothing, when sidebar is togle make it hidden
