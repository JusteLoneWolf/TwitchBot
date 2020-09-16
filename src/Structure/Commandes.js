class Command {
    constructor(client, options) {
        this.client = client;
        this.help = {
            name: options.name || null,
            description: options.description || "Pas d'information donnée.",
            usage: options.usage ?  `!${options.usage}`: "",
            category: options.category || "Information",
            exemple: options.exemple || "Pas d'exemple",
            args: options.args || "Pas d\'argument complexe"
        };
        this.conf = {
            cooldown: options.cooldown || 1000,
            aliases: options.aliases || [],
            args : options.args || "pas d\"arguments",
        };
        this.cooldown = new Set();
    }

    startCooldown(user) {
        this.cooldown.add(user);
        setTimeout(() => {
            this.cooldown.delete(user);
        }, this.conf.cooldown);
    }

    setMessage(message) {
        this.message = message;
    }
}

module.exports = Command;