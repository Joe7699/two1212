const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = /;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

if(cmd === `${prefix}b`){
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;

    if (!args[1]) {
      
        let embed3 = new Discord.RichEmbed()
        .setDescription(':white_check_mark: | تم ارسال رسالة الى جميع اعضاء السيرفر')
            .setColor("#FF2727")
                    message.channel.sendEmbed(embed3);
      
                  } else {
      
                     let embed4 = new Discord.RichEmbed()
        .setDescription(':white_check_mark: | تم ارسال رسالة الى جميع اعضاء السيرفر')
        .setColor("#02FF05")
         
       message.channel.sendEmbed(embed4);
         message.delete();
      }
  }
if(cmd === `${prefix}b`)
message.guild.members.forEach( member => {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let message2 = message.content.substr(3);
let embed09 = new Discord.RichEmbed()
.setDescription("Regin Broadcast")
.setColor("RANDOM")
.addField("Message:", `${message2}`)
.setFooter(message.author.username, message.author.avatarURL);
  member.send(embed09);
 message.delete();    
});
});
bot.login(process.env.BOT_TOKEN);
