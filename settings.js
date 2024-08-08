const fs = require("fs");
const chalk = require("chalk");
let moment = require("moment-timezone");

/*[ WAKTU ]*/
let wibh = moment.tz("Asia/Jakarta").format("HH");
let wibm = moment.tz("Asia/Jakarta").format("mm");
let wibs = moment.tz("Asia/Jakarta").format("ss");
let wktuwib = `${wibh}:${wibm}:${wibs}`;

/*[ TANGGAL ]*/
let d = new Date(new Date() + 3600000);
let locale = "id";

let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
  Math.floor(d / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric"
});
global.botdate = date
/*[ OWNER ]*/
global.owner = [
  ["62882007197249", "WibenID", true],
  ["6285184754171", "Bot", true]
];
global.rowner = "62882007197249@s.whatsapp.net";
global.numberbot = "6285184754171";

/*[ APIKEY ]*/
global.skizo = "Chainga";

/*[ SETTING TAMPILAN ]*/
global.APIs = {
  ayano: "https://ayano2.vercel.app",
  skizo: "https://skizo.tech"
};
global.APIKeys = {
  "https://skizo.tech": "Chainga"
};
global.isPairing = true;
global.max_upload = 200
global.link = "https://chat.whatsapp.com/G0gPg08y0VIGwW34D5SCCe"; 
global.ig = "https://instagram.com/rinka.433";
global.confess = "https://telegra.ph/file/63995dd7823219cfe1726.jpg";
/*[ AI LOGIC ]*/
global.logic = "Logic ai";

/*[ AUTHOR SETTING ]*/
global.tampilan = "Himmel"; 
global.author = global.creator = "WibenID"; 
global.namebot = "Himmel"; 
global.packname = ""; 
global.wm = "Himmel";

/*[ GAME SETTING ]*/
global.multiplier = 69; // Levelup

/*[ MESS SETTING ]*/
global.mess = {
  done: "Success ✓ ",
  wait: "Tunggu Sebentar",
  error: "Maaf fitur ini sedang dalam perbaikan"
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
