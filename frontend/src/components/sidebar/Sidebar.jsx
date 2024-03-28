import React from 'react';
import ContactList from "./ContactList";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import SidebarHeader from './SidebarHeader';

function Sidebar() {
    return (
        <div className='border-r border-primary flex flex-col h-full'>
            <div>
                <SidebarHeader />
            </div>
            <div>
                <SearchInput />
            </div>
            <div className='flex-1 overflow-y-auto'>
                <ContactList />
            </div>
            <div className='mt-auto'>
                <LogoutButton />
            </div>
        </div>
    );
};

export default Sidebar;
