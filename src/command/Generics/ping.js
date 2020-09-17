const Command = require("../../Structure/Commandes");
const {HELPER } = require("../../Utils/Constant");
class Ping extends Command{
    constructor(client){
        super(client,HELPER.COMMANDS.GENERICS.PING);
    }

    async run(client,channel, tags, message, self,args){
        let date = Date.now()
        client.ping()
            .then((data) => {
                let date2 = Date.now()
                return client.say(channel,`Pong `+(date2-date)+' ms')
            }).catch((err) => {
            //
        });
    }
}

module.exports = Ping;