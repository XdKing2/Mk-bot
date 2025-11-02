/* ═════════════════════════════════
 *  🚀  MALVIN KING TECH - YT
 * ═════════════════════════════════
 *  
 *  📺  YouTube    : https://www.youtube.com/@malvintech2
 *  💻  GitHub     : https://github.com/XdKing2
 *  🌐  Website    : Coming Soon
 *  🪀  WhatsApp  : https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S
 *  
 *  👨‍💻  Developer  : Malvin King
 *  📧  Contact    : Available on GitHub
 *  
 *  ⚠️   Please do not remove this watermark
 * ═════════════════════════════════
 *  © 2025 Malvin Tech - All Rights Reserved
 * ════════════════════════════════ */

const fs = require('fs')
const chalk = require('chalk')

//———————[ Owner Config ]——————————//

global.ownernumber = '+62895326456182' // Change to your number
global.ownername = 'ARYA' // add ur name
global.botMode ='public' // change to public or self

//————————[ Bot Config ]—————————//

global.SESSION_ID = ""; // add ur session id starts with starcore~
global.namabot = "BOT ARYA"
global.nomorbot = '083848810730' // Change to yourbot number
global.pair = "MRMALVIN"
global.version = '1.0.1'
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————[ Social Media Config ]———————//
global.web = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.linkSaluran = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.idSaluran = "120363402507750390@newsletter"
global.nameSaluran = "Malvin Tech Ch."

//————————[ Watermark Config ]———————//
global.packname = 'Stick By Mk'
global.author = 'YT Malvin King Tech'
global.foother = 'Made By Malvin King'


//———————[ Media Config ]—————————//
global.img = "https://files.catbox.moe/641pvo.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/641pvo.jpg"
global.thumb = [ 
    "https://files.catbox.moe/641pvo.jpg",
    "https://i.ibb.co/Z1zG8ndV/malvin-xd.jpg"

]

//—————[ Broadcast Config ]——————————//
// Delay Jpm & Pushctc || 1000 = 1 second
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave M-K"

//——————[ Message Config ]——————————//
global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ʏᴇᴛ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ, ᴘʀᴏᴄᴇssɪɴɢ...',
}

// *** message *** 
global.closeMsgInterval = 30; // 30 minutes. maximum 60 minutes, minimum 1 minute
global.backMsgInterval = 2; // 2 hours. maximum 24 hours, minimum 1 hour

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
