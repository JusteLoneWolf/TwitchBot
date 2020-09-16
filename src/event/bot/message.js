module.exports= (client,channel, tags, message, self) =>{
    if(self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    cmd.setMessage(message);

    try{
        cmd.run(client,channel, tags, message, self, args);
    }catch (e) {
        console.log('error',e.stack,message.channel,cmd)
    }
}