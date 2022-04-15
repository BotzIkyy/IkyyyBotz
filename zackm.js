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
const mathjs = require('mathjs')
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

// UCAPAN WAKTU ( MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
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

// Quoted
const content = JSON.stringify(m.message)
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

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

const listmn = `tiktok, youtube, instagram, google, translate, gimage, pinterest, mp4, jpeg, getpic, getname, sticker, smeme, toimage, tomp4, toaudio, tomp3, tovn, togif, tourl, nulis, kalkulator, quoted, volume, bass, tempo, ping, self, public, owner`
const qtod = m.quoted? "true":"false"
// Case Nye Sini Ngab
switch(command) {
case 'menu': {
mans.sendMessage(from, {text:listmn}, {quoted:m})
}
break
case 'join': {
vdd = args[0]
vcc = vdd.split("https://chat.whatsapp.com/")[1]
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
}, content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
m.reply(`Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`)
} else if (siznya > 50) {
try {
await mans.groupAcceptInvite(vcc).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
m.reply("Succes")
} catch {
m.reply("error")
}
} else {
m.reply("Error")
}
}).catch(_ => _)
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await mans.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'tempo': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'bass': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "bass")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'nulis': {
if (args.length < 1) return m.reply(`Example :\n${prefix}nulis MyMainas|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await m.reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => m.reply('Error') )
.on('exit', () => {
mans.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
break
case 'kalkulator': case 'kal': {
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'public': {
if (!isCreator) return m.reply(mess.owner)
mans.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw m.reply(mess.owner)
mans.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'toimage': case 'toimg': {
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
mans.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${mans.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await mans.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'getname': {
if (qtod === "true") {
namenye = await mans.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
mans.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case 'getpic': {
if (qtod === "true") {
try {
pporg = await mans.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await mans.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
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
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© MyMans APIs - MyMainas",
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