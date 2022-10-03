import nookies, {parseCookies} from 'nookies';
import axios from 'axios';
const getUser = async (ctx) => {
  const cookies = nookies.get(ctx);

  let user = {};
  let {access_token, refresh_token} =  parseCookies()
  return {props: {
      access_token, refresh_token
    }}
}


export default getUser;
