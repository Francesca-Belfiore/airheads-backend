const { AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET } = require("../config");

const Amadeus = require("amadeus");

// Utilizza il Client di Amadeus per ricevere l'authToken con cui chiamare le sue API
const amadeus = new Amadeus({
  clientId: AMADEUS_CLIENT_ID,
  clientSecret: AMADEUS_CLIENT_SECRET,
});

// Trova una lista di hotel in un'area e restituisce gli id
exports.getHotels = async (req, res) => {
  const { cityCode } = req.query;

  try {
    const response = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode,
    });

    res.json(JSON.parse(response.body));
  } catch (error) {
    console.error("Errore durante la ricerca degli hotel", error);
    res.status(500).json({ error: "Errore durante la ricerca degli hotel" });
  }
};

// Ricerca un hotel in base al suo id
exports.searchHotel = async (req, res) => {
  const { hotelIds, checkInDate, checkOutDate } = req.query;

  try {
    const response = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds,
      adults: "1",
      checkInDate,
      checkOutDate,
      currency: "EUR",
      lang: "it-IT",
    });

    res.json(JSON.parse(response.body));
  } catch (error) {
    console.error("Errore durante la selezione dell'hotel", error);
    res.status(500).json({ error: "Errore durante la selezione dell'hotel" });
  }
};
