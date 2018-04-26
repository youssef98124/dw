const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'general-الشات-العام');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Flexbots")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` :hearts: **تم دعوته من قبل :heart_eyes:  ${Invite.inviter} `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});
//-------------------------------------توكن
client.login("NDM5MDM2NDg3NzY2NjM4NTky.DcNW2Q.0RIs9UVu4RZcz9xKBphIX3vMqDk")
