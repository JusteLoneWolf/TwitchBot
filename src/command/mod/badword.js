const Command = require("../../Structure/Commandes");
const {HELPER } = require("../../Utils/Constant");

class Badword extends Command {
    constructor(client) {
        super(client, HELPER.COMMANDS.MOD.BADWORD);
    }

    async run(client, channel, tags, message, self, args) {
        let db = await this.client.dbmanager.getWord('word')
        let bad = db.badword
        let newlist = []

        switch (args[0]) {
            case "add":
                bad.push(args.slice(1).toString())
                await this.client.dbmanager.updatePassword("word",{badword:bad})
                client.say(channel,`${args.slice(1).toString()}  a etait ajouté`)
            break
            case "remove":
                if(!bad.includes(args.slice(1).toString())) return client.say(channel,'Ce mot n\'existe pas')
                for (let word of bad){
                    if(word !== args.slice(1).toString()){
                        newlist.push(word)

                    }
                }
                await this.client.dbmanager.updatePassword("word",{badword:newlist})
                client.say(channel,`${args.slice(1).toString()}  a etait supprimé`)
                break
        }

    }
}
module.exports = Badword;