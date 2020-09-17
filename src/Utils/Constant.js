const HELPER =  {
    COMMANDS:{
        GENERICS:{
            PING:{
                name:"ping",
                description:"Envoi le ping du bot",
                usage:`ping`,
                coolDown: 5000,
                aliases:["pong","p"],
                category:"Générique",
            }
        },
        MOD:{
            BADWORD:{
                name:"badword",
                description:"Gere le filtrage de mauvais mot",
                usage:`badword`,
                coolDown: 5000,
                aliases:["b"],
                category:"Moderation",
            }
        }
    }
}

module.exports.HELPER = HELPER