const router = require('express').Router();
const config = require('config');
const { logger, Api } = require('../lib');
const { shapeWeatherData } = require('./utils/weatherUtils')

const weatherEndpoint = config.get('weatherEndpoint');
const apiKey = config.get('apiKey');

const makeWeatherApiCall = async (url, zipCode) => {
  const response = await Api.callGet(url);
  return {
    ...response,
    zipCode,
  };
}

const getWeatherByZipcodes = async (req, res) => {
  try {
    logger.info('Getting weather info for areas with zipcodes..');
    const { zipCodes } = req.body;
    const weatherCalls = zipCodes.map((zipCode) => {
      const url = `${weatherEndpoint}?zip=${zipCode},us&appid=${apiKey}&units=imperial`
      return makeWeatherApiCall(url, zipCode);
    });
    let results = await Promise.all(Object.values(weatherCalls));
    results = shapeWeatherData(results, zipCodes);
    res.status(200).json(results);
  } catch (e) {
    logger.error('Error in retrieving weather data');
    logger.error(JSON.stringify(e.stack));
    res.status(500).send(e.message);
  }
}

router.post('/getbyzipcodes', getWeatherByZipcodes)

module.exports = router;
