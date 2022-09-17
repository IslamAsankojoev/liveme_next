import axios from 'axios';
import { setCookie } from 'nookies';

export default async (req, res) => {
  const { username, password, email } = req.body;
  try {
    try {
      await axios.post(`${process.env.DOMAIN}/api/users`, {
        username,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
    const token = await axios.post(`${process.env.DOMAIN}/api/token`);

    setCookie({ res }, 'access_token', token?.access_token, {
      httpOnly: true,
      secure: 'development' !== 'development',
      maxAge: 5 * 60,
      path: '/',
    });

    setCookie({ res }, 'refresh_token', token?.refresh_token, {
      httpOnly: true,
      secure: 'development' !== 'development',
      maxAge: 1 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e);
  }
};
