require('dotenv').config();

const Airtable = require('airtable-node');

const API_KEY = process.env.AIRTABLE_API_KEY;

const airtable = new Airtable({apiKey: API_KEY})
  .base('appX656h4yZNjzjMr')
  .table('products');

exports.handler = async (event, context) => {
  try {
    const {records} = await airtable.list();
    const product = records.map((item) => {
      const {id} = item;
      const {image, type, desc, Name: name} = item.fields;
      const url = image[0].url;
      return {id, name, type, desc, url};
    });
    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'no any datas',
    };
  }
};
