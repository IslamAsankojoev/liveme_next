import axios from 'axios';

let codes = ['ru', 'kg', 'en', 'tr', 'pl'];

const key = '0c0f0eb6c4ce4d50bac61d86098d4a07'

let currencies = {
  ru: 'с',
  kg: 'с',
  en: '$',
  tr: '₺',
  pl: 'zł',
};

export default async function getCurrency(lat, lon) {
  let currency = null;

  currency = await axios
    .get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${key}`)
    .then(({ data }) => {
      let info = data.results[0]
      if (codes.includes(info.country_code)) {
        return {
          country: info.country,
          code: info.country_code.toLowerCase(),
        }
      }
      return {
        country: info.country,
        code: 'en',
      };
    });
  return currency;

}