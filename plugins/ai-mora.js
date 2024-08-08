/*
* *[AI MORA] CJS*
* By VynzzDev
* https://whatsapp.com/channel/0029VaEGq6MDeON8TGlwWN1Y
*/

const axios = require('axios');

const handler = async (m, { text }) => {
  if (!text) return m.reply('Mochi Time! (⁠≧⁠▽⁠≦⁠)');
  
  try {
    const apiMora = await axios.get(`https://api.yanzbotz.my.id/api/ai/mora-ai?query=${text}`);
    const response = apiMora.data.result;
    m.reply(response);
  } catch (error) {
    m.reply('Error: ' + error.message);
  }
};

handler.command = ['mora'];
handler.help = ['mora'];
handler.tags = ['ai'];

module.exports = handler;