import nookies from 'nookies';
import axios from 'axios';
const getUser = async (ctx) => {
  const cookies = nookies.get(ctx);

  let user = {};
  let token = cookies?.jwt;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(`${process.env.DOMAIN}/api/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {}
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      user,
      token,
    },
  };
};
export default getUser;
