const LogEvents = require("events");
const logEvents = new LogEvents();

// Remember that event name will be same when emitting and listening

logEvents.on("greet", () => {
  console.log("Hy Farooq!");
});

logEvents.emit("greet");
