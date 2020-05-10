const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Вот такой');
};
module.exports.help = {
    name: "ip"
};