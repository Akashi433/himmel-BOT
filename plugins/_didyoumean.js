const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys") 

const didyoumean = require('didyoumean');
const similarity = require('similarity');


let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);    
    let similarityPercentage = parseInt(sim * 100);      
//let thumb = 'https://telegra.ph/file/3735c8d5b61da875c6ce1.jpg';
    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴄᴀʀɪ ᴍᴇɴᴜ ʙᴇʀɪᴋᴜᴛ ɪɴɪ?\n\n◦ ɴᴀᴍᴀ ᴄᴏᴍᴍᴀɴᴅ: ➠ *${usedPrefix + mean}*\n◦ ʜᴀsɪʟ ᴋᴇᴍɪʀɪᴘᴀɴ: ➠ *${similarityPercentage}%*`;

      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
        contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363144038483540@newsletter',
			newsletterName: 'Powered By Similarity', 
			serverMessageId: -1
	    	},
            externalAdReply: {
            title: '', 
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/3735c8d5b61da875c6ce1.jpg',
            mediaType: 1,
            renderLargerThumbnail: true
            },
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Did You Mean?`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            subtitle: "",
            hasMediaAttachment: false,
           
          }),
          
          contextInfo: {
          forwardingScore: 9999,
          isForwarded: false,
          mentionedJid: conn.parseMention(m.sender)
          },
          externalAdReply: { 
          showAdAttribution: true, 
          renderLargerThumbnail: false, 
          mediaType: 1
          },
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            /*{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(data)
              },*/
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"YES\",\"id\":\"${usedPrefix + mean}\"}`
              }, 
              {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"NOT\",\"id\":\".123\"}`
              }, 
              ],
          })
        })
    }
  }
}, { quoted: fkontak })
return conn.relayMessage(m.chat, msgs.message, {})
    }
  }
}

module.exports = handler;