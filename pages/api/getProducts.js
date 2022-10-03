import axios from 'axios';
export default async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.DOMAIN}/api/products`, {
      headers: {
        Authorization: 'Bearer ' + process.env.TOKEN,
      },
    });

    res.status(200).json({ data });
  } catch (e) {
    res.status(400).send(e);
  }
};
