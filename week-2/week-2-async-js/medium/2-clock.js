// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
    const now = new Date();

    const options = {
        hour: '2-digit',     // Format hour with leading zero (01-12)
        minute: '2-digit',   // Format minute with leading zero (00-59)
        second: '2-digit',   // Format second with leading zero (00-59)
        hour12: true         // Use 12-hour format
    };

    const readableTime = now.toLocaleTimeString('en-US', options);

    console.log(readableTime);

}, 1000)