function Contact({ contact, getChat }) {
    return (
        <>
            <div onClick={() => getChat(contact.id)} className="py-4 px-2 border-b flex gap-5 items-center border-border">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-white font-bold">
                            {contact.name}
                        </p>
                        <p className="text-[10px]">
                            Yestarday
                        </p>
                    </div>
                    <div>
                        <p className="text-sm">Hello, how are you?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;