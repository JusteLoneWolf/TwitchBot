const mongoose = require("mongoose");
const { Word} = require('../Schema/index');

class DatabaseManager {
    getWord = async name => {
        const data = await Word.findOne({ name: name});
        if (data) return data;
        return false

    };
    updatePassword = async (name, settings) => {
        let data = await this.getWord(name);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(Object.assign(data,settings));
    };

    async createWord(data= {}){
        const merged = Object.assign({ _id: mongoose.Types.ObjectId()},data);
        const createWord = await new Word(merged);
        createWord.save()
    }

}

module.exports = DatabaseManager