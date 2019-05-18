/*
	Welcome Module for DiscordJS
	Author: Flisher (andre@jmle.net)
    
  * Send private or public welcome message
  * @param  {Bot} bot - The discord.js CLient/bot
  * @param  {object} options - Optional (Custom configuarion options, use @MEMBER to replace by the member mention, @GUILDNAME for the guildname)
  * @return {[type]}         [description]

*/

module.exports = function(bot, options) {
  
  // Event Handlers
	bot.on('guildMemberAdd', member => {    
    // Set options
    privatemsg = (options && options.privatemsg) || (options[member.guild.id] && options[member.guild.id].privatemsg) || null;
    publicmsg = (options && options.publicmsg) || (options[member.guild.id] && options[member.guild.id].publicmsg) || null;
    publicchannel = (options && options.publicchannel) || (options[member.guild.id] && options[member.guild.id].publicchannel) || null;
    
    
    // ********** CODE FOR PUBLIC MESSAGE **********  
    if (publicmsg && publicchannel) {  
      let channel = member.guild.channels.find(val => val.name === publicchannel) || member.guild.channels.get(publicchannel);
      if (!channel) {
        console.log(`Channel "${publicchannel}" not found`);
      }
      else
      {    
        if (channel.permissionsFor(bot.user).has('SEND_MESSAGES')) {
          // Prepare the Message by replacing the @MEMBER tag to the user mention
          if (typeof publicmsg === "object") {
            // Embed
            embed = publicmsg ;
            channel.send({ embed });
          }
          else {
            msg = publicmsg.replace(`@MEMBER`, `${member.user}`);
            msg = msg.replace(`@GUILDNAME`, `${member.guild.name}`);
            
            // Send the Message
            channel.send(msg);
          }
        }      
        else
        {
          console.log(`The Bot doesn't have the permission to send public message to the configured channel "${publicchannel}"`)
        }
      }
    }
    

    // ********** CODE FOR PRIVATE MESSAGE **********            
    if (privatemsg) {
      msg = publicmsg.replace(`@MEMBER`, `${member.user}`);
      msg = msg.replace(`@GUILDNAME`, `${member.guild.name}`);
      member.send(privatemsg)  
    }
  });

    /*
	client.on('guildMemberRemove', member => {
		// Take action when someone leave the server
    });
    */    



  
  // Event Handlers
	bot.on('guildMemberRemove', member => {    
    // Set options
    privatemsg1 = (options && options.privatemsg1) || (options[member.guild.id] && options[member.guild.id].privatemsg1) || null;
    publicmsg1 = (options && options.publicmsg1) || (options[member.guild.id] && options[member.guild.id].publicmsg1) || null;
    publicchannel1 = (options && options.publicchannel1) || (options[member.guild.id] && options[member.guild.id].publicchannel1) || null;
    
    
    // ********** CODE FOR PUBLIC MESSAGE **********  
    if (publicmsg1 && publicchannel1) {  
      let channel = member.guild.channels.find(val => val.name === publicchannel1) || member.guild.channels.get(publicchannel1);
      if (!channel) {
        console.log(`Channel "${publicchannel1}" not found`);
      }
      else
      {    
        if (channel.permissionsFor(bot.user).has('SEND_MESSAGES')) {
          // Prepare the Message by replacing the @MEMBER tag to the user mention
          if (typeof publicmsg1 === "object") {
            // Embed
            embed = publicmsg1 ;
            channel.send({ embed });
          }
          else {
            msg = publicmsg1.replace(`@MEMBER`, `${member.tag}`);
            msg = msg.replace(`@GUILDNAME`, `${member.guild.name}`);
            
            // Send the Message
            channel.send(msg);
          }
        }      
        else
        {
          console.log(`The Bot doesn't have the permission to send public message to the configured channel "${publicchannel1}"`)
        }
      }
    }
    

    // ********** CODE FOR PRIVATE MESSAGE **********            
    if (privatemsg1) {
      msg = publicmsg1.replace(`@MEMBER`, `${member.user}`);
      msg = msg.replace(`@GUILDNAME`, `${member.guild.name}`);
      member.send(privatemsg1)  
    }
  });

    /*
	client.on('guildMemberRemove', member => {
		// Take action when someone leave the server
    });
    */    
}
