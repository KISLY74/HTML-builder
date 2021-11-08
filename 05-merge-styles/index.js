const fs = require('fs')
const path = require('path')

const folderStyles = path.join('05-merge-styles/styles')

let Ws = fs.createWriteStream('05-merge-styles/project-dist/bundle.css')

fs.readdir(folderStyles, (err, files) => {
   files.forEach(file => {
      fs.stat(folderStyles + '/' + file, (err, stats) => {
         if (stats.isFile() && path.extname(file) === '.css') {
            fs.readFile(folderStyles + '/' + file, 'utf-8', (err, data) => {
               if (err) throw err
               Ws.write(data)
            })
         }
      })
   })
})


