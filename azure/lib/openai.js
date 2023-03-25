const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

module.exports = openai;
