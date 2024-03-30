import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import EditableField from './EditableField';
import { updateProfile } from '../../../slices/userSlice';

function Profile({ setIsProfileSelected }) {
    const dispatch = useDispatch();
    const { name, username, about } = useSelector(state => state.user.user);
    const [profileData, setProfileData] = useState({ name, username, about });

    const handleChange = (fieldName, fieldValue) => {
        setProfileData(prevData => ({
            ...prevData,
            [fieldName]: fieldValue
        }));
    };

    const handleSave = () => {
        dispatch(updateProfile(profileData));
    };

    return (
        <>
            <div className="h-28 flex pl-4 pb-5 text-on-primary bg-primary items-end">
                <div className="flex gap-4 items-center">
                    <FaArrowLeftLong onClick={() => setIsProfileSelected(false)} className="text-2xl cursor-pointer" />
                    <p className="text-xl">Profile</p>
                </div>
            </div>
            <div>
                <div className="avatar w-full">
                    <div className="w-40 mx-auto my-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-5">

                    <EditableField
                        label="Your name"
                        value={profileData.name}
                        onChange={value => handleChange('name', value)}
                        onSave={handleSave} />

                    <EditableField
                        label="User name"
                        value={profileData.username}
                        onChange={value => handleChange('username', value)}
                        onSave={handleSave} />

                    <EditableField
                        label="About"
                        value={profileData.about}
                        onChange={value => handleChange('about', value)}
                        onSave={handleSave} />
                </div>
            </div>
        </>
    );
}

export default Profile;