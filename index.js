const Discord = require('discord.js');
const Welcome = require("welcome.js");
const bot = new Discord.Client();



bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("DEUTSCHLAND LEBT",{type: "PLAYING"} )
   console.log("DEUTSCHLAND LEBT Online!");


    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})


bot.on('message', msg => {
  if (msg.content === 'schau Katzenvideos') {
    msg.channel.send('ok');
    bot.user.setActivity("Katzenvideos",{type: "WATCHING"} )
  }

  if (msg.content === 'spiel mit dir selbst') {
    bot.user.setActivity("mit sich selbst rum",{type: "PLAYING"} )

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
  publicchannel : "willkommen"
  })
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
