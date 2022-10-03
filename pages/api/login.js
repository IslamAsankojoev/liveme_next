import axios from 'axios';
import { setCookie } from 'nookies';
export default async (req, res) => {
  const { password, identifier } = req.body;


  try {
    const postRes = await axios.post(`${process.env.DOMAIN}/api/auth/local`, {
      identifier,
      password,
    });

    setCookie({ res }, 'jwt', postRes.data.jwt, {
      httpOnly: true,
      secure: 'development' !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
