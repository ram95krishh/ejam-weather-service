const { path, compose, applySpec, map, prop, zipObj } = require('ramda');
const config = require('config');

const iconUrl = config.get('iconUrl');

const shapeWeatherData = (data) => {
  const zipCodes = map(item => item.zipCode, data);
  return compose(
    zipObj(zipCodes),
    map(item => ({
      ...item,
      icon: `${iconUrl}${item.icon}@2x.png`
    })),
    map(applySpec(
      {
        temp: path(['main', 'temp']),
        feelsLike: path(['main', 'feels_like']),
        max: path(['main', 'temp_max']),
        min: path(['main', 'temp_min']),
        humidity: path(['main', 'humidity']),
        sunset: path(['sys', 'sunset']),
        sunrise: path(['sys', 'sunrise']),
        description: path(['weather', 0, 'description']),
        icon: path(['weather', 0, 'icon'])
      }
    ))
  )(data);
}

module.exports = {
  shapeWeatherData,
}