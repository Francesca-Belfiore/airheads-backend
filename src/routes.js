const express = require("express");
const router = express.Router();

const flightsController = require("./controllers/flightsController.js");
const hotelsController = require("./controllers/hotelsController.js");
const pricesController = require("./controllers/pricesController.js");
const imagesController = require("./controllers/imagesController.js");

// Endpoint per /autosuggest
router.post("/autosuggest", flightsController.autosuggest);

// Endpoint per /search-flights
router.post("/search-flights", flightsController.searchFlights);

// Endpoint per /hotels
router.get("/hotels-list", hotelsController.getHotels);

// Endpoint per /search-hotel
router.get("/search-hotel", hotelsController.searchHotel);

// Endpoint per /exchange-rates
router.get("/exchange-rates", pricesController.getExchangeRates);

// Endpoint per /city-images
router.get("/city-images", imagesController.getCityImages);

module.exports = router;
