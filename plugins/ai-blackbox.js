/*
    [ SHARE CODE IRENG KARDUS BUKAN PUNYA EGVUAXRL GTW SAHA G ADA CR ]

    *MAAP YA ETMIN PUNYA PENYAKIT JANTUNG SAKIT LAGI BELUM BISA UP² YANG MENUNGGU MATERI DEMO TERBARU DI STOP DULU🙏🏿

*CH: https://whatsapp.com/channel/0029Va9iaylFy724TO4TSc0J

*GC: https://chat.whatsapp.com/Gz3xoYG4mzaFP0xamibtFy
*/

const fetch = require('node-fetch');

const egvuaxrl = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* buatkan saya code html dino run`;

  try {
    let emsg = await conn.sendMessage(m.chat, { text: 'Tunggu sebentar ya...' }, { quoted: m });

    const egvuaxrl = await irengChat(text);

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: emsg.key,
        type: 14,
        editedMessage: {
          conversation: egvuaxrl.trim()
        }
      }
    }, { quoted: fkontak });
  } catch (err) {
    console.error(err);
    throw "Terjadi kesalahan dalam menjawab pertanyaan";
  }
};

egvuaxrl.command = egvuaxrl.help = ['blackbox', 'blackboxai', 'aicoding'];
egvuaxrl.tags = ['ai'];
module.exports = egvuaxrl;

async function irengChat(content) {
  const url = "https://www.blackbox.ai/api/chat";
  const headers = {
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Referer": "https://www.blackbox.ai/",
    "Content-Type": "application/json",
    "Origin": "https://www.blackbox.ai",
    "Alt-Used": "www.blackbox.ai"
  }

  const data = {
    messages: [{ role: "user", content }],
    id: "chat-free",
    previewToken: null,
    userId: "",
    codeModelMode: true,
    agentMode: {},
    trendingAgentMode: {},
    isMicMode: false,
    userSystemPrompt: "Namamu adalah himmel kamu orang nya kawai, kamu tuh ahli di bidang programming dan hal teknis tentang it jadi kamu bisa menjawab tentang permasalahan code ataupun hal yang berbau teknologi atau IoT(internet of things), kamu akan menjawab sak pol kemampuan mu wes",
    maxTokens: 1024,
    webSearchMode: false,
    promptUrls: "",
    isChromeExt: false,
    githubToken: null
  }

  try {
    const irengResponse = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    })

    const irengData = await irengResponse.text()
    return irengData
  } catch (error) {
    console.error("kocak error:", error)
    return null
  }
}