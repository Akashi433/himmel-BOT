const fs = require("fs")
const fetch = require("node-fetch")
const moment = require("moment-timezone")
let handler = async (m, { conn, args, command }) => {
	let _muptime;
	if (process.send) {
		process.send("uptime");
		_muptime =
			(await new Promise((resolve) => {
				process.once("message", resolve);
				setTimeout(resolve, 1000);
			})) * 1000;
	}
	let muptime = clockString(_muptime);
	let _uptime = process.uptime() * 1000;
	let uptime = clockString(_uptime);

	let tag = `@${m.sender.replace(/@.+/, "")}`;
	let mentionedJid = [m.sender];

	m.reply(`乂 *R U N T I M E*\n•> ${uptime}`);
};
handler.help = ["runtime"];
handler.tags = ["main"];
handler.command = ["runtime", "rt"];

module.exports =  handler;

function ucapan() {
	const time = moment.tz("Asia/Jakarta").format("HH");
	let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱";
	if (time >= 4) {
		res = "Pagi Kak 🌄";
	}
	if (time >= 10) {
		res = "Selamat Siang Kak ☀️";
	}
	if (time >= 15) {
		res = "Selamat Sore Kak 🌇";
	}
	if (time >= 18) {
		res = "Malam Kak 🌙";
	}
	return res;
}
function clockString(ms) {
	let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
	let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
	let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
	let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
	return [d, " *Hari* ", h, " *Jam* ", m, " *Menit* ", s, " *Detik* "]
		.map((v) => v.toString().padStart(2, 0))
		.join("");
}