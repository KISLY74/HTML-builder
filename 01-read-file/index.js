const fs = require('fs')
const path = require('path')

var __dirname = path.join('./01-read-file/text.txt')

var stream = new fs.ReadStream(__dirname, 'utf8')
stream.on('readable', () => {
   var data = stream.read()
   console.log(data)
})