const Discord = require('discord.js');
const Welcome = require("./welcome.js");
const bot = new Discord.Client();
const firebase = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("NIGHT DREAM",{type: "PLAYING"} )
   console.log("NIGHT DREAM Online!");


    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
const sayObject = {
  "hi": "Hi!",

  
};
const responseObject = {
     "Hallo": "Du bist jetzt mal still.",
   "lass": "Nein"
    
    };
    
    
    
bot.on('message', (message) => {
  if(responseObject[message.content]) {
    message.reply(responseObject[message.content]);
  }
  
   if(sayObject[message.content]) {
    message.channel.send(sayObject[message.content]);
  }


 }
 )




Welcome(bot, {

  publicmsg : "Willkommen bei NIGHT DREAM @MEMBER, :waxing_crescent_moon::tada::hugging: ! \nBitte stelle dich bei <#554418899740000275>  kurz vor:fire:",
  publicchannel : "willkommen",
  privatemsg1 : "Willkommen bei NIGHT DREAM!",
  publicmsg1 : "@MEMBER hat den Server verlassen. Tschüss:wave:!",
  publicchannel1 : "579287066131824670"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
