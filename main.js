let TMI = require('./src/Structure/TwitchClient')
let option = require("./config")

let client = new TMI(option)
client.init()