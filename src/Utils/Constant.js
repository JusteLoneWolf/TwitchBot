const HELPER =  {
    COMMANDS:{
        GENERICS:{
            PING:{
                name:"ping",
                description:"Envoi le ping du bot",
                usage:`ping`,
                coolDown: 5000,
                aliases:["pong","p"],
                permission: "READ_MESSAGES",
                category:"Générique",
            }
        }
    }
}

module.exports.HELPER = HELPER