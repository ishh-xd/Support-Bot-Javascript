const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
module.exports ={
name:"messageCreate",
run: async(client, message)=>{
    
if(message.author.bot){
   return;
}
if(!message.guild){

return message.reply("Please use me in a guild.")
}
const args = message.content.trim().split(/ +/g);

     const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
        if (message.content.match(mention)) {

            message.channel.send("Yeah? You need any help? ")
        }; 

    // Ishh On Top
 // Coded by Ishh
// https://github.com/AdityaOP2008/Support-Bot-Javascript
    
    
if(message.mentions.users.has(message.guild.ownerId))  {
    message.reply("Imagine pinging server owner.")
    }
    
if(args.includes('help')||args.includes('Help')){
    if(message.channel.id==client.config.supportChannelId){
        return message.reply(`Type you issue here itself!`)
    }
    
    
    message.reply(`If you need any help move to: <#${client.config.supportChannelId}>`)
}
    
  
    
if(args.includes('invite')||args.includes('Invite')){
    let IshhOP = new EmbedBuilder()
    .setTitle('Invite Bots')
   .setDescription("If you want to invite the bots, click on the \`\"Add to Server\"\` button on the bot's profile.") 
  .setImage('https://cdn.discordapp.com/attachments/1023506489979195392/1026767653286727710/Screenshot_2022-10-04-13-37-51-221_com.discord.png')
    
  .setColor(client.embedColor)  
    
    
message.reply({embeds:[IshhOP]})    
}
  
    const helpDeskRow = new ActionRowBuilder()

			.addComponents(

				new ButtonBuilder()

					.setCustomId('help_but_1')
.setEmoji('1⃣')
					.setLabel(' ')

					.setStyle(ButtonStyle.Primary),
new ButtonBuilder()

					.setCustomId('help_but_2')

.setEmoji('2⃣')

					.setLabel(' ')

					.setStyle(ButtonStyle.Primary),
		new ButtonBuilder()

					.setCustomId('help_but_3')
.setEmoji('🛑')
					.setLabel(' ')

					.setStyle(ButtonStyle.Primary),
            
            );
    
    
 let helpDEmd = new EmbedBuilder ()
 .setTitle("Help Desk")
 .setDescription("1⃣ : How to invite bots?\n\n2⃣ : Source Code\n\n🛑 : Not available here")
  .setColor(client.embedColor)
 .setThumbnail(message.guild.iconURL())
  
 if(args.includes('help-desk')||args.includes('helpdesk')){
  message.reply('❕ Updating help-desk.')      
  
let HDC= client.channels.cache.get(client.config.helpDeskChannel)
if(!HDC){
    return message.reply('\`Help Desk Channel\` not found.')
}
  HDC.bulkDelete(100)     
        
        setTimeout(()=>{
  HDC.send({embeds:[helpDEmd], components:[helpDeskRow]}) 
    message.channel.send(`Successfully updated help-desk in: <#${HDC.id}>`)
   },1000)
  
 }
    
    
    
    
}}
