let handler = async (m,{ conn }) => {

let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    if (!mime) throw `*• Example :* ${usedPrefix + command} *[reply sticker]*`;
    conn.sendMessage(
      m.chat,
      {
        image: await q.download(),
        caption: mess.done,
      },
      {
        quoted: m,
      },
    );
}
handler.help = ['toimg']
handler.tags = ['tools']
handler.command =['toimg']

module.exports = handler