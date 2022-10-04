const { ActivityType } = require('discord.js')

module.exports={
name:'ready',
run: async(client)=>{

let x=client.guilds.cache.get(client.config.serverId)

if(!x){
console.error('Bot is not present in the guild.')
console.error('Bot is not present in the guild.')
 client.destroy()
return process.exit();
}
    
  client.user.setPresence({ status:'dnd', activities: [{ name: `${x.name}`, type:ActivityType.Watching}] }); 

console.log("🟢 "+client.user.tag)
    
    


}
}
