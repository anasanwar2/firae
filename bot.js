const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643813432772132867")
setInterval(function() {
channel.send(`Rj Anas the top in the humenbengis and fly with ground feby here bye bye bye beby Rj Anas the top in the humenbengis and fly with ground feby here bye bye bye beby Rj Anas the top in the humenbengis and fly with ground feby here bye bye bye beby `);
}, 30)
})

client.login(process.env.BOT_TOKEN);