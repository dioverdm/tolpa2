function Contact({ contact, handleChatWith, isSelected }) {
    return (
        <div
            onClick={() => handleChatWith(contact.id)}
            className={`py-4 px-2 border-b flex gap-5 items-center border-border cursor-pointer ${isSelected ? 'bg-select' : ''}`}
        >
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="text-white font-bold">{contact.name}</p>
                    <p className="text-[10px]">Yesterday</p>
                </div>
                <div>
                    <p className="text-sm">Hello, how are you?</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
