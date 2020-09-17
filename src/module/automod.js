module.exports = async (client,channel, tags, message, self) =>{
    const DbManager = require('../Structure/DataBaseManager')
    let dbmanager = new DbManager()

    if(self) return

    // Antilink
    let reg= /(discord\.gg|discord\.com\/invite)\/.+/
    if(!message.match(reg)){
        if(message.match(/(clip.twitch.tv|twitch.tv\/zechaos\/clip)\/.+/)) return
        let reg  = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
        if(message.match(reg)){
            console.log(tags)
            client.deletemessage(channel,tags.id);
        }
    }

    // WOrd filter

    let db = await dbmanager.getWord('word')
    let word = db.badword
    let racism = db.racism
        if(word.includes(message.toLowerCase())){
            client.deletemessage(channel,tags.id);
        }else if(racism.includes(message.toLowerCase())){
            client.deletemessage(channel,tags.id);
            client.say(channel,`${tags.username} a etait ban pour racisme`)
            client.ban(channel,tags.username,"Racisme")
        }
}