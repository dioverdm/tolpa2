import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';

const EditableField = ({ label, value }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [fieldValue, setFieldValue] = useState(value);

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleChange = (e) => {
        setFieldValue(e.target.value);
    };

    const handleSave = () => {
        setIsEditable(false);
        onSave(fieldValue);
    };

    return (
        <div className="space-y-4 border-b border-border pb-2">
            <div className="flex h-6 items-center justify-between">
                <p className="text-notify font-thin text-sm">
                    {label}
                </p>
                {isEditable ? (
                    <p className="cursor-pointer" onClick={handleSave}>✅</p>
                ) : (
                    <MdEdit className="cursor-pointer" onClick={handleEditClick} />
                )}
            </div>
            {isEditable ? (
                <input
                    type="text"
                    value={fieldValue}
                    onChange={handleChange}
                    className="bg-transparent outline-none border-b w-full border-white pb-2"
                />
            ) : (
                <input
                    type="text"
                    readOnly
                    value={fieldValue}
                    className="bg-transparent outline-none border-b border-transparent w-full pb-2"
                />
            )}
        </div>
    );
};

export default EditableField;
