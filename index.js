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
  if (msg.content === 'schau Katzenvideos') {
    msg.channel.send('ok');
    bot.user.setActivity("Katzenvideos",{type: "WATCHING"} )
  }

  if (msg.content === 'spiel mit dir selbst') {
    bot.user.setActivity("mit sich selbst rum",{type: "PLAYING"} )

    msg.channel.send('hdf');
  }

  if (msg.content === 'hdf') {
    bot.user.setActivity("Pornos",{type: "WATCHING"} )

    msg.reply('schau xxx');
  }


 }



   

);
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
