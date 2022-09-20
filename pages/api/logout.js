import { destroyCookie } from 'nookies';

export default async (req, res) => {
  destroyCookie({ res }, 'access_token', {
    path: '/',
  });
  destroyCookie({ res }, 'refresh_token', {
    path: '/',
  });

  res.status(200).end();
};
