const axios = require("axios");
const { SKYSCANNER_API_KEY } = require("../config");

// Fornisce suggerimenti per l'autocompletamento della ricerca
exports.autosuggest = async (req, res) => {
  const {
    limit,
    market,
    locale,
    searchTerm,
    includedEntityTypes,
    isDestination,
  } = req.body;

  try {
    const response = await axios.post(
      "https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights",
      {
        limit,
        query: {
          market,
          locale,
          searchTerm,
          includedEntityTypes,
          isDestination,
        },
      },
      {
        headers: {
          "x-api-key": SKYSCANNER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(
      "Errore durante la richiesta dei suggerimenti alle API di Skyscanner",
      error
    );
    res.status(500).json({
      error:
        "Errore durante la richiesta dei suggerimenti alle API di Skyscanner",
    });
  }
};

// Ricerca voli per una determinata destinazione
exports.searchFlights = async (req, res) => {
  try {
    // Ottieni i dati dalla richiesta del client
    const { market, locale, currency, query_legs, adults, cabin_class } =
      req.body;

    // Configura i parametri per la richiesta
    const requestData = {
      query: {
        market,
        locale,
        currency,
        query_legs,
        adults,
        cabin_class,
      },
    };

    // Esegui la richiesta API di Skyscanner
    const response = await axios.post(
      "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create",
      requestData,
      {
        headers: {
          "x-api-key": SKYSCANNER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // Invia la risposta del servizio Skyscanner al client
    res.json(response.data);
  } catch (error) {
    console.error(
      "Errore nella gestione della richiesta dei voli alle API di Skyscanner",
      error
    );
    res.status(500).json({
      error:
        "Errore nella gestione della richiesta dei voli alle API di Skyscanner",
    });
  }
};
