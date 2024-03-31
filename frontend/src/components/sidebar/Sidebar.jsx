import React, { useState } from 'react';
import ContactList from "../contact/ContactList";
import SearchInput from "./SearchInput";
import SidebarHeader from './SidebarHeader';
import Profile from './profile/Profile';
import Settings from './settings/Settings';

function Sidebar() {
    const [isProfileSelected, setIsProfileSelected] = useState(false);
    const [isSettingsSelected, setIsSettingsSelected] = useState(false);

    console.log(isProfileSelected, isSettingsSelected);

    return (
        <div className='border-r w-full border-border bg-secondary h-screen flex flex-col'>
            {isProfileSelected ? (
                <Profile setIsProfileSelected={setIsProfileSelected} />
            ) : isSettingsSelected ? (
                <Settings setIsSettingsSelected={setIsSettingsSelected} />
            ) : (
                <div className=' h-full flex flex-col'>
                    <div>
                        <SidebarHeader setIsSettingsSelected={setIsSettingsSelected} setIsProfileSelected={setIsProfileSelected} />
                    </div>
                    <div>
                        <SearchInput />
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        <ContactList />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
