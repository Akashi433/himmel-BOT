const fetch = require("node-fetch")
const yts = require("yt-search")

const handler = async (m, { conn, text, pushName }) => {
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.play not you*`)
  let res = await yts(text)
  let url = res.all;
  let result = url[Math.floor(Math.random() * url.length)]
  teks = `⏩ *PLAYING AUDIO*\n\n> *Judul : ${result.title}*\n> *Upload : ${result.ago}*\n> *Url : ${result.url}*\n> *RequestBy : ${pushName}*\n\n📦 *AUDIO SEDANG DIPROSES....*`
  conn.sendMessage(m.chat, { image: { url: result.thumbnail },  caption: teks }, { quoted: m })
  let himmel = await (await fetch('https://rest-flame.vercel.app/api/dl/ytmp3?apikey=Star&url=' + result.url)).json();
  let result = himmel.result;
  conn.sendMessage(m.chat,{ audio: { url: result.audio }, mimetype: 'audio/mp4' },{ quoted: m })
}
handler.command = handler.help = ["play"]
handler.tags = ["downloader"]
module.exports = handler