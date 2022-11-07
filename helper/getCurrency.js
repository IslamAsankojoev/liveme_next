import axios from 'axios';

let codes = ['ru', 'kg', 'en', 'tr', 'pl'];

let currencies = {
  ru: 'сом',
  kg: 'сом',
  en: '$',
  tr: '₺',
  pl: 'zł',
};

export default async function getCurrency() {
  let currency =
    await axios
      .get(`http://ip-api.com/json`)
      .then(({ data }) => {
        if (codes.includes(data.countryCode.toLowerCase())) {
          console.log(data.countryCode.toLowerCase());
          return {

            country: data.country,
            code: data.countryCode.toLowerCase(),
            currency: currencies[data.countryCode.toLowerCase()],
          }
        }
        return {
          country: data.country,
          code: 'en',
          currency: currencies['en'],
        };
      });
  return currency;
}