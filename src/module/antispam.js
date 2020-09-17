module.exports = (client,channel, tags, message, self) =>{
    console.log(self)
    if(self) return
    let build = {
        username: tags.username,
        warns: 0,
        date: Date.now()+10000
    }

    if( client.userStorage.has(tags.username) && client.userStorage.get(tags.username).warns ===3){
        client.ban(channel,tags.username,"Spam")
        client.say(channel,`${tags.username} a etait ban pour spam`)
    }

    if(!client.userStorage.has(tags.username)){
        client.userStorage.set( tags.username,build)
    }else{
        if(client.userStorage.get(tags.username).date >= Date.now()){
            client.userStorage.get(tags.username).warns++
            client.userStorage.get(tags.username).date = Date.now()+3000
        }
    }

}