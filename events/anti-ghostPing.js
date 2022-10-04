const { EmbedBuilder } = require('discord.js')
module.exports={
name:"messageDelete",
run: async(client, message)=>{
    
    if(!client.config.ghostPing)
        return;
    
  if(!message.mentions.users.first())
      return;
    
    let x = new EmbedBuilder()
    .setTitle('Ghost Ping Detected')
    .setDescription(`**Sent by:**\n\`${message.author.username} (${message.author.id})\`\n\n**Pinged Users:**\n\`${message.mentions.users.map(x=>"• "+x.username+" | "+ x.id).join('\n')}\`\n\n\nCoded by Ishh © 2020-2025`)
   .setColor(client.embedColor)
    
    
message.channel.send({embeds:[x]})

}
}
    // Ishh On Top
 // Coded by Ishh
// https://github.com/AdityaOP2008/Support-Bot-Javascript
    
    // Ishh On Top
 // Coded by Ishh
// https://github.com/AdityaOP2008/Support-Bot-Javascript
    
