const EventEmitter = require('node:events');

const event = new EventEmitter();

event.on("myEvent", function() {
    setTimeout(() => {
        console.log("My Custom event fired");
    }, 2000);
});

event.emit("myEvent");