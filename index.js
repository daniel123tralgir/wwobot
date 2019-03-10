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
  "hi ProjectX": "Hi!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "schau Katzenvideos": "ok",
  "spiel Fortnite": "Nö",
  "oof": "big oof",
      "Tja": "Thorsten",
          "tja": "Thorsten",
  "aaa": "nerv nicht",
  "hahaha": "rofl"
  
};
const responseObject = {
     "Hallo": "Du bist jetzt mal still.",
   "lass": "Nein",
    
    })
    
    
    
bot.on('message', (message) => {
  if(responseObject[message.content]) {
    message.reply(responseObject[message.content]);
  }
  
   if(sayObject[message.content]) {
    message.channel.send(sayObject[message.content]);
  }


 }

bot.on('message', msg => {
  if (msg.content === 'schau Katzenvideos') {
    msg.channel.send('ok');
    bot.user.setActivity("Katzenvideos",{type: "WATCHING"} )
  }

  if (msg.content === 'spiel mit dir selbst') {
    bot.user.setActivity("mit sich selbst rum",{type: "PLAYING"} )

    msg.channel.send('hdf');
  }
    
     if (msg.content === 'Alisa') {


    msg.channel.send('hdf');
  }

  if (msg.content === 'schau xxx') {
    bot.user.setActivity("Pornos",{type: "WATCHING"} )

    msg.channel.send('Jaaa;)');
  }
    
    


 }

);


Welcome(bot, {

  publicmsg : "Willkommen bei DEUTSCHLAND LEBT @MEMBER, :tada::hugging: !",
  publicchannel : "willkommen",
  privatemsg1 : "Willkommen bei DEUTSCHLAND LEBT!",
  publicmsg1 : "Tschüss, @MEMBER!",
  publicchannel1 : "willkommen"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
