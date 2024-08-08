const { sticker } = require('../lib/Upload/sticker.js')
const uploadFile = require('../lib/Upload/uploadFile.js')
const uploadImage = require('../lib//Upload/uploadImage.js')
const { webp2png } = require('../lib/Upload/webp2mp4.js')

let handler = async (m, { conn, args, usedPrefix, command }) => {
	conn.sendMessage(m.chat, {
          react: {
            text: `⏳`,
            key: m.key,
          }})
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maximum 10 seconds!')
      let img = await q.download?.()
      if (!img) throw `reply image/video/sticker with command ${usedPrefix + command}`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.owner)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (!out || typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.owner)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.owner)
      else return m.reply('URL invalid!')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}