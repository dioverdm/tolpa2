export const formatLastSeen = (lastSeen) => {
    let lastSeenDate = new Date(lastSeen);
    let now = new Date();

    // Check if last seen is today
    if (lastSeenDate.getDate() === now.getDate() &&
        lastSeenDate.getMonth() === now.getMonth() &&
        lastSeenDate.getFullYear() === now.getFullYear()) {
        // Format time with AM/PM
        let timeOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        return lastSeenDate.toLocaleTimeString('en-US', timeOptions);
    } else {
        // Check if last seen was yesterday
        let yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        if (lastSeenDate.getDate() === yesterday.getDate() &&
            lastSeenDate.getMonth() === yesterday.getMonth() &&
            lastSeenDate.getFullYear() === yesterday.getFullYear()) {
            return "Yesterday";
        } else {
            // Format date as "20 March 2024"
            let dateOptions = {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            };
            return lastSeenDate.toLocaleDateString('en-US', dateOptions);
        }
    }
}
