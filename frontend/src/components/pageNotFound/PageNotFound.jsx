function PageNotFound() {
    //     const jsonString =
    //         `{
    //         "404": "Page Not Found"  
    // }`;

    return (
        <div className="flex justify-center items-center h-screen">
            <p className="whitespace-pre-wrap font-mono text-3xl">
                {`{
     `}
                <span className="text-red-500">"404"</span>
                {` : "Page not found"
}`}
            </p>
        </div>
    );
}
export default PageNotFound;