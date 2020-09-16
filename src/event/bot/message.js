module.exports= (client,channel, tags, message, self) =>{
    if(self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
}