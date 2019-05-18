const Discord = require('discord.js');
const Welcome = require("./welcome.js");
const bot = new Discord.Client();
const firebase = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("DEUTSCHLAND LEBT",{type: "PLAYING"} )
   console.log("DEUTSCHLAND LEBT Online!");


    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
const sayObject = {
  "hi": "Hi!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "schau Katzenvideos": "ok",
  "spiel Fortnite": "Nö",
  "oof": "big oof",

 "tja": "Thorsten",
     "Tja": "Thorsten",
  "aaa": "nerv nicht",
          "Koala": "stinkt",
          "koala": "stinkt",
              "koala?": "= Noob",
        "Katja": "is geil",
        "alisa": "mag Fisch",
        "Alisa": "mag Fisch",
        "katja": "is geil",
        "oh": "yeah nahui",
        "ach komm": "ja",
  "hahaha": "rofl",
  "KoalaKoala": "Koala ist geil",
      "koalakoala": "Koala ist geil"
  
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

  publicmsg : "Willkommen bei DEUTSCHLAND LEBT @MEMBER, :tada::hugging: ! \nBitte stelle dich bei <#554418899740000275>  kurz vor:fire:",
  publicchannel : "willkommen",
  privatemsg1 : "Willkommen bei DEUTSCHLAND LEBT!",
  publicmsg1 : "@MEMBER hat den Server verlassen. Tschüss!",
  publicchannel1 : "579287066131824670"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
