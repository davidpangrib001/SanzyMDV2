const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
sanzy: 'https://zeroyt7-api.xyz',
zenz: 'https://zenzapi.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'gysnzbsja',
'https://zenzapi.xyz': 'f2116e96b4',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Dapitt'
global.owner = ['6282160268332']
global.packname = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n@one.webp'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Kamu admin ?',
    botAdmin: 'Jadiin admin botnya..',
    owner: 'Orang tidak terverifikasi, anda bukan onwer ku!',
    group: 'Untuk Grup bang..',
    private: 'Pakai ini di private chat',
    bot: 'Execution Fail',
wait: '*_Di buat.._*',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})