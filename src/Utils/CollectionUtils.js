const isObject = d => typeof d === 'object' && d !== null;
module.exports ={
    flatten(obj, ...props) {
        if (!isObject(obj)) return obj;

        props = Object.assign(
            ...Object.keys(obj)
                .filter(k => !k.startsWith('_'))
                .map(k => ({ [k]: true })),
            ...props,
        );

        const out = {};

        for (let [prop, newProp] of Object.entries(props)) {
            if (!newProp) continue;
            newProp = newProp === true ? prop : newProp;

            const element = obj[prop];
            const elemIsObj = isObject(element);
            const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null;

            if (element instanceof require('../Structure/Collection')) out[newProp] = Array.from(element.keys());
            else if (valueOf instanceof require('../Structure/Collection')) out[newProp] = Array.from(valueOf.keys());
            else if (Array.isArray(element)) out[newProp] = element.map(e => this.flatten(e));
            else if (typeof valueOf !== 'object') out[newProp] = valueOf;
            else if (!elemIsObj) out[newProp] = element;
        }

        return out;
    }
}
