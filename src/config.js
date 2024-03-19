const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  AMADEUS_CLIENT_ID: process.env.CLIENT_ID,
  AMADEUS_CLIENT_SECRET: process.env.CLIENT_SECRET,
  PORT: process.env.PORT,
  SKYSCANNER_API_KEY: process.env.SKYSCANNER_API_KEY,
  UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY
};