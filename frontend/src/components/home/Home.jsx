import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import ChatSection from '../chat/ChatSection';

function Home() {
    return (
        <div className="flex h-screen">
            <div className="w-1/4 border-r-[0.5px] border-gray-700">
                <Sidebar />
            </div>
            <div className="flex-1">
                <ChatSection />
            </div>
        </div>
    );
}

export default Home;
