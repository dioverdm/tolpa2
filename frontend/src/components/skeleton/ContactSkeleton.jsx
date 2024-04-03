function ContactSkeleton() {
    return (
        <>
            <div className="flex gap-4  px-2 py-2 items-center">
                <div className="skeleton w-16 h-16 bg-primary rounded-full shrink-0"></div>
                <div className="flex flex-col w-full gap-4">
                    <div className="skeleton  bg-primary h-4 w-20"></div>
                    <div className="skeleton  bg-primary h-4 w-full"></div>
                </div>
            </div>
        </>
    )
}
export default ContactSkeleton;