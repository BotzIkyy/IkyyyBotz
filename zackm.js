/** 
 - Create By ZackMans Official
 - Contact Me on https://wa.me/+6281385062956
 - Follow iG : @salman_alfarizi_15
 - Thanks Dika Ardnt
*/

require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

// TANGGAL ( MyMans APIs )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

// Public & Self
if (!mans.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: mans.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}

const listmn = `tiktok, youtube, instagram, google, translate, gimage, pinterest, mp4, jpeg, sticker, smeme, owner`
// Case Nye Sini Ngab
switch(command) {
case 'menu': {
mans.sendMessage(from, {text:listmn}, {quoted:m})
}
break
case 'owner': case 'creator': {
mans.sendContact(m.chat, global.owner, m)
}
break
case 'translate': case 'terjemahan': {
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case 'gimage': case 'gig': {
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: mans.user.name,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'google': {
if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'pinterest': case 'image': {
if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  '⭔ Title : ' + args.join(" ") + '\n⭔ Media Url : '+imgnyee,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
m.reply("Error")
}
}
break
case 'igstory': case 'instagramstory': {
if (!args[0]) return m.reply("Usernamenya mana kak?")
try {
hx.igstory(args[0]).then(async(res) => {
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${res.user.username}\n⭔ Followers : ${res.user.followers}`
urut = 1
for (let i = 0; i < res.medias.length; i++) {
textbv += `\n\nMedia File ${urut++}\nType: ${res.medias[i].type}/${res.medias[i].fileType}\nUrl: ${res.medias[i].url}`
}
textbv += `\n\n_Ketik mp4/jpeg (Linknya), salin linknya_`
mans.sendMessage(from, {image:log0, caption:textbv}, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("error!")
}
}
break
case 'igdl': case 'instagram': {
if (!args[0]) return m.reply(mess.linkm)
try {
hx.igdl(args[0]).then(async(res) => {
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${res.user.username}\n⭔ Followers : ${res.user.followers}`
urut = 1
for (let i = 0; i < res.medias.length; i++) {
textbv += `\n\nMedia File ${urut++}\nType: ${res.medias[i].type}/${res.medias[i].fileType}\nUrl: ${res.medias[i].url}`
}
textbv += `\n\n_Ketik mp4/jpeg (Linknya), salin linknya_`
mans.sendMessage(from, {image:log0, caption:textbv}, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Link error!")
}
}
break
case 'mp4' : {
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {video:{url:args[0]}, caption:"Succes"}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'jpeg': {
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {image:{url:args[0]}, caption:"Succes"}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'ttdl': case 'tiktok': case 'ttmp4': case 'ttmp3': case 'tiktoknowm': {
if (!args[0]) return m.reply(mess.linkm)
try {
hx.ttdownloader(args[0]).then(async(res) => {
texttk = `*| TIKTOK DOWNLOADER |*

_Pilih watermak atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ttvd ${res.wm}`, buttonText: {displayText: '× Watermak'}, type: 1},
{buttonId: `ttad ${res.nowm}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: {url:res.nowm},
caption: texttk,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Link error!")
}
}
break
case 'ttvd': {
mans.sendMessage(from, {video:{url:args[0]}, mimetype:" video/mp4", caption:"Succes"}, {quoted:m})
}
break
case 'ttad': {
mans.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true}, {quoted:m})
}
break
case 'play': case 'ytplay': {
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytdl ${anu.url}`, buttonText: {displayText: 'Download'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytdl': case 'yt': case 'youtube': case 'ytmp4': case 'ytmp3': {
if (!args[0]) return m.reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

⭔ Title : ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case 'ytvd': {
mans.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
}
break
case 'ytad': {
mans.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true}, {quoted:m})
}
break
case 'smeme': case 'smm': {
if (!args.join(" ")) return m.reply("Masukan Textnya!")
if (/image/.test(mime)) {
var media = await mans.downloadAndSaveMediaMessage(quoted, "smeme")
imgbbUploader('b9a90f1e63f41bac31532712c87e4c25', media)
.then(async (data) => {
var bgsd = args.join(" ")
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
mans.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
})
.catch(err => {
throw err
})
} else {
m.reply("Kirim foto dengan caption smeme")
}
}
break
case 'sticker': case 's': {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
mans.sendMessage("62882000383955@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})