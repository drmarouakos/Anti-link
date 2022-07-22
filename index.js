const Discord = require('discord.js');
const client = new Discord.Client()


client.on('ready', () => {
    console.log('ready')
})

client.on('message', async (message) => {
    if (message.member.permissions.has('ADMINISTRATOR')){
        if (message.content.includes('http://') || message.content.includes('https://')) {
            message.delete()
        }
    }
})

client.login("token")