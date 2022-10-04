const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({
intents: [
GatewayIntentBits.Guilds, 
GatewayIntentBits.GuildMessages, 
GatewayIntentBits.DirectMessages,
	GatewayIntentBits.MessageContent

	], 

	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 

})
client.config = require('./env.js')
client.embedColor = client.config.embedColor;



fs.readdirSync("./events/").forEach(file => {
const event = require(`./events/${file}`);
client.on(event.name, (...args) => event.run(client, ...args));
});


client.login(client.config.token)
    .catch((e)=>console.log(e))










module.exports ={
    client
}
