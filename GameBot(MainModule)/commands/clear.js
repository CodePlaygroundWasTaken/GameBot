exports.run = async (bot,message,args) => {
      let num = parseInt(message.content.replace('$!clear',''));
      message.channel.bulkDelete(num + 1);
      message.channel.send(`I have deleted ${num} messages!`).then(msg => msg.delete({ timeout:2000}))
    }

exports.help = {
    name: 'clear'
}