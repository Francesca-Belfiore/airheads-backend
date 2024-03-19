const axios = require("axios");

// Trova i tassi di scambio delle varie valute
exports.getExchangeRates = async (req, res) => {
  const { currency } = req.query;

  try {
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${currency}`
    );

    const exchangeRates = response.data.rates;

    res.json(exchangeRates);
  } catch (error) {
    console.error("Errore durante il recupero dei tassi di cambio", error);
    res
      .status(500)
      .json({ error: "Errore durante il recupero dei tassi di cambio" });
  }
};
