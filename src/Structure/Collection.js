const BaseCollection = require('@discordjs/collection');
class Collection extends BaseCollection {
    toJSON() {
        return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : this.flatten(e)));
    }
}

module.exports = Collection;