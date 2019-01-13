const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    bot.user.setActivity("Pornos",{type: "WATCHING"} )



    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})


bot.on('message', msg => {
  if (msg.content === 'mach was Sinnvolles, DEUTSCHLAND LEBT') {
    msg.replx('ok');
    bot.user.setActivity("Katzenvideos",{type: "WATCHING"} )
  }

  if (msg.content === 'Spiel mal was, DEUTSCHLAND LEBT') {
    bot.user.setActivity("mit sich selbst rum",{type: "PLAYING"} )

    msg.reply('hdf');
  }

  if (msg.content === 'hdf') {
    bot.user.setActivity("lol",{type: "WATCHING"} )

    msg.reply('lol');
  }


 }



   

);
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
