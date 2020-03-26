const {
  swagger,
  weather,
} = require('../service');

module.exports = (app) => {
  app.get('/health', (req, res) => res.sendStatus(200));
  app.use('/weather', weather);
};
