const axios = require("axios");

const { UNSPLASH_API_KEY } = require("../config");

// Ricerca immagini di una città
exports.getCityImages = async (req, res) => {
  const { destination, imagesQuantity } = req.query;

  try {
    // Effettua una ricerca di foto correlate alla destinazione su Unsplash
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${destination}&per_page=${imagesQuantity}&client_id=${UNSPLASH_API_KEY}`
    );

    // Estrae gli URL delle immagini dalla risposta
    const images = response.data.results.map((photo) => photo.urls.small);

    res.json(images);
  } catch (error) {
    console.error("Errore durante il recupero delle immagini", error);
    res.status(500).json({ error: "Impossibile recuperare le immagini" });
  }
};
