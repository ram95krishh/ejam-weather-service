const Joi = require('joi');

require('dotenv').config();

// Define validation for all the environment variables
const envVarsSchema = Joi.object({
  NODE_CONFIG_ENV: Joi.string()
    .allow(['dev', 'qa', 'uat', 'prod'])
    .default('dev'),
  PORT: Joi.number().default(7600),
  WEATHER_ENDPOINT: Joi.string().uri(),
  API_KEY: Joi.string(),
  ICON_URL: Joi.string().uri(),
})
  .unknown()
  .required();

const { error, value: env } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: env.NODE_CONFIG_ENV.trim(),
  logPrefix: `ejam-weather-service :: ${env.NODE_CONFIG_ENV} :: `,
  port: env.PORT,
  weatherEndpoint: env.WEATHER_ENDPOINT,
  apiKey: env.API_KEY,
  iconUrl: env.ICON_URL,
};

module.exports = config;
