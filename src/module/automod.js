module.exports = (client,channel, tags, message, self) =>{
    if(self) return
    let reg= /(discord\.gg|discord\.com\/invite)\/.+/
    if(!message.match(reg)){
        if(message.match(/(clip.twitch.tv|twitch.tv\/zechaos\/clip)\/.+/)) return
        let reg  = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
        if(message.match(reg)){
            console.log(tags)
            client.deletemessage(channel,tags.id);
        }

    }
}