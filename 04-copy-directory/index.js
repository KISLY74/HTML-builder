const fs = require('fs')
const path = require('path')

var folderFilesCopy = path.join('04-copy-directory/files-copy')
var folderFiles = path.join('04-copy-directory/files')

function copyDir() {
   fs.mkdir(folderFilesCopy, () => { })
   fs.readdir(folderFiles, (err, files) => {
      files.forEach(file => {
         fs.copyFile(folderFiles + '/' + file, folderFilesCopy + '/' + file, (err) => {
            if (err) throw err
         })
      })
   })
   fs.readdir(folderFilesCopy, (err, files_copy) => {
      files_copy.forEach(file_copy => {
         fs.unlink(folderFilesCopy + '/' + file_copy, (err) => {
            if (err) throw err
         })
      })
   })
}

copyDir()