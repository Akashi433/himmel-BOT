const axios = require("axios");
const cheerio = require("cheerio");

const KomSer = async (query) => {
  try {
    const url = `https://api.komiku.id/?post_type=manga&s=${encodeURIComponent(query)}`; // Ganti dengan URL HTML langsung
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      },
    });

    const $ = cheerio.load(data);

    let results = [];

    // Selector disesuaikan dengan struktur HTML
    $('div.kan').each((i, element) => {
      const title = $(element).find('h3').text().trim();
      const link = $(element).find('a').attr('href');

      if (title && link) {
        results.push({ title, url: link });
      }
    });

    return results.slice(0, 5); // Batasi hasil hingga 5
  } catch (error) {
    console.error("Error fetching Komiku data:", error.message);
    return [];
  }
};
