const Command = require("../../Structure/Commandes");
const {HELPER } = require("../../Utils/Constant");
class Ping extends Command{
    constructor(client){
        super(client,HELPER.COMMANDS.GENERICS.PING);
    }

    async run(client,channel, tags, message, self,args){
        return client.say(channel,`Pong`)
    }
}

module.exports = Ping;