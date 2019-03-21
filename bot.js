const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "555771160894111757"; // ايدي السررفر
var channel = "555774518057107467";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**لا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|ا إله الا الله, سبحان الله, الحمدالله, الله اكبر|**')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "2") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);