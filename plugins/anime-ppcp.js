const fetch = require('node-fetch')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    try {
        const imgx = await Couple();

        if (imgx) {
            const male = imgx.male;
            const female = imgx.female;
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: male
                },
                caption: `Ini *male* nya ${tag}`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
            await conn.sendMessage(m.chat, {
                image: {
                    url: female
                },
                caption: `Ini *female* nya ${tag}`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(`Error: ${e}`)
    }
}
handler.help = ['ppcouple']
handler.tags = ['anime']
handler.command = /^(pp(cp|couple))$/i
module.exports = handler

async function Couple() {
    try {
        const response = await fetch("https://tools.revesery.com/couple/rvsr.php");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}