// Add method all to the lib object
async function all(m) {
  // Globally required modules
  global.fs = require("fs"); // File system module
  global.axios = require("axios"); // HTTP client module
  global.fetch = require("node-fetch"); // Fetch API module
  global.ffmpeg = require("fluent-ffmpeg"); // FFmpeg wrapper module
  global.cheerio = require("cheerio") // Cheerio Require Module
  
  // Custom global variables and functions
  global.backsound = "./Library/Backsound"; // Backsound directory
  global.Func = require("../lib/myfunc"); // Custom functions module
  global.Gets = require("../lib/func"); // Custom functions module
  global.uploadImage = require(".././lib/Upload/uploadImage"); // Custom image uploader module
  global.uploadFile = require(".././lib/Upload/uploadFile"); // Custom file uploader module
  
  // Array of images
  global.thumbnail = ["https://telegra.ph/file/2c34a290b5b6fe26fe167.jpg"];

  global.icon = ["https://telegra.ph/file/6ec37fbb730da8a589ae2.jpg"];

  // Fake contact message structure
  global.fkontak = {
    key: {
      remoteJid: "0@s.whatsapp.net", // Remote JID
      participant: "0@s.whatsapp.net", // Participant JID
      id: "" // Message ID
    },
    message: {
      conversation: `*[ Himmel - MD By WibenID ]*` // Message content
    }
  }
 }
// Export lib module
module.exports = { all };