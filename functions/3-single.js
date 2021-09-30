const Airtable = require('airtable-node');

const API_KEY = process.env.AIRTABLE_API_KEY;

const airtable = new Airtable({apiKey: API_KEY})
  .base('appX656h4yZNjzjMr')
  .table('products');

exports.handler = async (event, context) => {
  const {id} = event.queryStringParameters;
  if (id) {
    try {
      const data = await airtable.retrieve(id);
      console.log(data, 'data');
      if (data.error) {
        return {
          statusCode: 404,
          body: `no provided data via ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'not found any data',
      };
    }
  }
  return {
    statusCode: 500,
    body: 'not found product id',
  };
};
