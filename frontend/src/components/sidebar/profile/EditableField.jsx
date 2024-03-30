import { useState } from 'react';
import { MdEdit, MdDone } from 'react-icons/md';

const EditableField = ({ label, value, onSave, onChange }) => {
    const [isEditable, setIsEditable] = useState(false);

    const handleToggleEdit = () => {
        if (isEditable) {
            onSave();
        }
        setIsEditable(prevState => !prevState);
    };

    return (
        <div className="space-y-4 border-b border-border pb-2">
            <div className="flex h-6 items-center justify-between">
                <p className="text-notify font-thin text-sm">{label}</p>
                {isEditable ? (
                    <MdDone className="cursor-pointer text-2xl text-on-primary" onClick={handleToggleEdit} />
                ) : (
                    <MdEdit className="cursor-pointer text-xl text-on-primary" onClick={handleToggleEdit} />
                )}
            </div>
            {isEditable ? (
                <input
                    type="text"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className="bg-transparent outline-none border-b w-full border-white pb-2"
                />
            ) : (
                <input
                    type="text"
                    readOnly
                    value={value}
                    className="bg-transparent outline-none border-b border-transparent w-full pb-2"
                />
            )}
        </div>
    );
};

export default EditableField;
