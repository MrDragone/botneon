const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Что умеет FrameBot")
    .setColor('#ffa200')
    .addField("Узнать команды","```!help```")
    .addField("Узнать IP серверв","```!ip```")
    .addField("Информация о сервере","```!serverinfo```")
    .addField("Информация о игроке","```!userinfo```")
    .addField("Информация о серверах проекта","```!status```")
    .addField("pong","```!ping```")

    bot.send(embed);

};
module.exports.help = {
    name: "help"
};