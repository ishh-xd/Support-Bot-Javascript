const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports ={
name:"interactionCreate",
run: async(client, interaction)=>{
    
    
    
if (!interaction.isButton()) return;

    
    if (interaction.customId === 'help_but_1') {
let IshhOP = new EmbedBuilder()
.setTitle('Invite Bots')
.setDescription("If you want to invite the bots, click on the \`\"Add to Server\"\` button on the bot's profile.") 
.setImage('https://cdn.discordapp.com/attachments/1023506489979195392/1026767653286727710/Screenshot_2022-10-04-13-37-51-221_com.discord.png')
.setColor(client.embedColor) 

interaction.reply({embeds:[IshhOP], ephemeral: true})
	
}
        
        
    if (interaction.customId === 'help_but_2') {
       
   interaction.reply({content:"Github: [Support-Bot-Javascript](https://github.com/AdityaOP2008/Support-Bot-Javascript/)", ephemeral:true})     
    }
  

    
    
    if (interaction.customId === 'help_but_3') {

       interaction.reply({content:`If this help-desk didn\'t help you, kindly move to: <#${client.config.supportChannelId}>`, ephemeral:true})     
  }  
 
    
    
}
}