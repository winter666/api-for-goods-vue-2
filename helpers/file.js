const path = require('path')
const fs = require('fs')

class FileHelper {

    constructor(fileName, filePath = '') {
        this.dataPath = path.join(
            __dirname,
            '../data' + filePath,
            fileName
        )
    }

    async fetch () {
        return new Promise((resolve, reject) => {
            fs.readFile(this.dataPath, 'utf-8', (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }
}

module.exports = FileHelper;