require('dotenv').config()
module.exports = {
    TmiOption :{
        options: { debug: true },
        connection: {
            secure: true,
            reconnect: true
        },
        identity: {
            username: 'Zeka',
            password: process.env.OAUTH
        },
        channels: [ 'zechaos' ]
    }
}