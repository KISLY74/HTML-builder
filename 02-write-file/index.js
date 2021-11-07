const fs = require('fs')
const { stdout, stdin } = require('process')

let writeStream = fs.createWriteStream('02-write-file/hello.txt')

stdout.write('Напишите что-нибудь, для завершения процесса и вывода прощальной фразы введите "exit" или используйте комбинацию клавиш "ctrl + c"')

stdin.on('data', (data) => {
   writeStream.write(data)
   if (data.toString().trim() === 'exit') {
      stdout.write('Прощай')
      process.exit()
   }
})

process.on('SIGINT', () => {
   stdout.write('Прощай')
   process.exit()
})


