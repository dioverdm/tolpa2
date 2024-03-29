import React, { useState } from 'react';
import ContactList from "../contact/ContactList";
import SearchInput from "./SearchInput";
import SidebarHeader from './SidebarHeader';
import Profile from './profile/Profile';

function Sidebar() {
    const [isProfileSelected, setIsProfileSelected] = useState(false);
    return (
        <div className='border-r border-border bg-secondary h-screen flex flex-col'>
            {isProfileSelected ?
                <Profile setIsProfileSelected={setIsProfileSelected} /> :
                <div className=' h-full flex flex-col'>
                    <div>
                        <SidebarHeader setIsProfileSelected={setIsProfileSelected} />
                    </div>
                    <div>
                        <SearchInput />
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <ContactList />
                    </div>
                </div>
            }
        </div>
    );
};

export default Sidebar;
