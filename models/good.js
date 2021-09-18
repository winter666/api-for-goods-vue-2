const FileHelper = require('../helpers/file');

class Good {


    async getData () {
        return await this.getDataByName('data');
    }

    async getNames () {
        return await this.getDataByName('names');
    }

    async getDataByName (name) {
        let fileHlp = new FileHelper(name + '.json');
        return await fileHlp.fetch();
    }
}

module.exports = Good;