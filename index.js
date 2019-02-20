// Import Client.js
const MPPClient = require("./client.js");

// Creation of the bot that will connect to MPP
client = new MPPClient('ws://multiplayerpiano.com', undefined);

// Start of the bot
client.start();

// When the bot is connected...
client.on("hi", () => {
	// Log a message in the console
	console.log("Online");

	// Go into a channel
	client.setChannel("whats up I'm bored");

	// Showing that the bot is ready
	setTimeout(() => {
		client.sendArray([{ m:'userset', set:{name:"Karl's chat bot"} }]);
		client.sendArray([{ m:'a', message:"Connected" }]);
	}, 100)
});

// I'll just add a random comment
client.on("a", (msg) => {
	if(msg.a.toLowerCase() == "ping"){
		client.sendArray([{ m:'a', message:"pooooong" }]);
	}
});