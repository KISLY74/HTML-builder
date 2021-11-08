const fs = require('fs')
const path = require('path')

var __dirname = path.join('./03-files-in-folder/secret-folder')

fs.readdir(__dirname, (err, files) => {
   files.forEach(file => {
      fs.stat(__dirname + '/' + file, (err, stats) => {
         if (stats.isFile()) {
            let fileName = file.replace(`${path.extname(file)}`, '')
            let extName = path.extname(file).replace('.', '')
            console.log(fileName + ' - ' + extName + ' - ' + stats.size / 1024 + 'kb')
         }
      })
   })
})