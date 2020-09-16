const {Client}= require('tmi.js')
const {readdir} = require('fs')

class TwitchClient extends Client{
    constructor(option) {
        super(option.TmiOption);
    }

    init(){
        this.cmdload()
        this.evtloader()
        this.login()
    }

    cmdload(){

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