// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NjUxODQwMjQwNDE5NjAyNDM1.Xqm5-Q.N9ij_pvy4xI2SOkJ2eviCfBy2n8');