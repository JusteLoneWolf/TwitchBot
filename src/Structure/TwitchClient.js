
const {Client}= require('tmi.js')
const {readdir} = require('fs')
const Collection = require('./Collection')
class TwitchClient extends Client{
    constructor(option) {
        super(option.TmiOption);
        this.commands = new Collection()
        this.aliases = new Collection()
        this.userStorage = new Collection()
    }

    init(){
        this.cmdload()
        this.evtloader()
        this.login()
    }

    cmdload(){
        readdir("./src/command/", (err, files) => {
            if (err) this.emit("error", err);
            for (const dir of files) {
                readdir(`./src/command/${dir}/`, (err, commands) => {
                    if (err) console.log("error", err);
                    for (const com of commands) {
                        try {
                            if (!com) return;
                            const command = new (require(`../command/${dir}/${com}`))(this);
                            this.commands.set(command.help.name, command);
                            command.conf.aliases.forEach(a => this.aliases.set(a, command.help.name));
                            console.log(`${com} chargé`)

                        } catch (e) {
                            console.log("error", `${com} n"a pas chargé ${e.message}`)
                        }
                    }

                })
            }
        });
        return this
    }

    evtloader(){
        readdir("./src/event", (err, files) => {
            if (!files) return;
            if (err) console.log( err);
            for (const dir of files) {
                readdir(`./src/event/${dir}`, (err, file) => {
                    if (!file) return;
                    if (err) console.log(err);
                    for (const evt of file) {
                        try {
                            if (!evt) return;
                            const event =require(`../event/${dir}/${evt}`);
                            console.log(`${evt} chargÃ©`);
                            super.on(evt.split(".")[0], event.bind(null, this));
                        } catch (e) {
                            console.log(`${evt} n"a pas chargé ${e.stack}`)
                        }
                    }
                })
            }
        });
        return this

    }

    login(){
        return super.connect()
    }
}

module.exports = TwitchClient