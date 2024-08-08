const fetch = require("node-fetch");

async function before(m) {
	this.autosholat = this.autosholat ? this.autosholat : {};
	let who =
		m.mentionedJid && m.mentionedJid[0]
			? m.mentionedJid[0]
			: m.fromMe
			? this.user.jid
			: m.sender;
	let id = m.chat;
	if (id in this.autosholat) {
		return false;
	}
	//let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
	//let jadwalSholat = data.data.timings;
	let jadwalSholat = {
		Fajar: "04:49",
		Sunrise: "06:04",
		Dzuhur: "12:06",
		Asar: "15:21",
		Sunset: "18:08",
		Maghrib: "18:08",
		Isya: "19:38",
		Imsak: "04:39",
		Midnight: "00:06",
		Firstthird: "22:07",
		Lastthird: "02:06",
	};
	const date = new Date(
		new Date().toLocaleString("en-US", {
			timeZone: "Asia/Jakarta",
		}),
	);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const timeNow = `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}`;
	for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
		if (timeNow === waktu) {
			let caption = `Hai kak @${
				who.split`@`[0]
			},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`;
			this.autosholat[id] = [
				this.reply(m.chat, caption, null, {
					contextInfo: {
						mentionedJid: [who],
					},
				}),
				setTimeout(() => {
					delete this.autosholat[id];
				}, 57000),
			];
		}
	}
}

const disabled = false;

module.exports = { before, disabled };