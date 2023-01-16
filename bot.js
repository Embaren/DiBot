const Discord=require('discord.js');

const bot=new Discord.Client();

function di(message,reply){		
    inputContent=message.content;
    diIdx = inputContent.toLowerCase().search('di');
    
    if(diIdx>=0){
        outputContent = inputContent.substring(diIdx+2)
        if(outputContent!=""){
            reply(outputContent)
        }
    }
    return
}

bot.on("ready", () => {
	bot.user.setActivity('€help', {type: "playing"}); 
});

bot.on('message',function(message){
	
	if (message.author.bot) return;
	
	if (message.content.startsWith('http')) return;
	
	function reply(text,tag=false) {if (tag) message.reply(text); else message.channel.send(text);}
    
    di(message,reply);
});

bot.login(process.env.BOT_TOKEN);