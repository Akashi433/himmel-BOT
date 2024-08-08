/*
CASE CEK NIK
Credit : SuryaDev
Sumber : https://whatsapp.com/channel/0029VaU3j0z2ER6liR0MY601
*/

const fetch = require('node-fetch');

let handler = async(m, { args, text }) => {
const ucword = (str = '') => {
return str.replace(/^([a-z])|\s+([a-z])/g, function(text) {
return text.toUpperCase();
})
}
if (!text) return m.reply('Input nik yang ingin kamu cek.')
if (isNaN(args[0])) return reply(`Example : ${prefix + command} 332004xxxxxxxxxx`)
if (args[0].toString().length !== 16) return reply('NIK harus 16 digit.')
let result = await fetch(`https://suryadev.vercel.app/api/ceknik?nik=${args[0]}`).then(response => response.json())
if (!result.status) return reply(result.message)
delete result.status;
delete result.creator;
delete result.message;
let resultTxt = '乂  *C E K - N I K*\n\n'
for (let key in result.data) resultTxt += `◦  ${ucword(key)} : ${result.data[key]}\n`
await m.reply(resultTxt)
}
handler.help = ['nik']
handler.tags = ['internet']
handler.command = ['nik']

module.exports = handler;