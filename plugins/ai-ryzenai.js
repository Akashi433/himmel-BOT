const axios = require('axios');

const handler = async (m, { text }) => {
  if (!text) return m.reply('Ada yang bisa saya bantu');
  
  try {
    const ryzenai = await axios.get(`https://api.ryzendesu.vip/api/ai/ryzenai?text=${text}`);
    const response = ryzenai.data.result;
    m.reply(response);
  } catch (error) {
    m.reply('Error: ' + error.message);
  }
};

handler.command = ['ryzenai'];
handler.help = ['ryzenai'];
handler.tags = ['ai'];

module.exports = handler;