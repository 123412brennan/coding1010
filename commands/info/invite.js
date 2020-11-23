const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE ZEYROX BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`:white_check_mark: [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=773217041611882507&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY KILLERCLAWS1`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}