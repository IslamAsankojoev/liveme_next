import axios from 'axios';
import lodash from 'lodash';
export default async (req, res) => {
  const { clientName, clientAddress, clientPhone, clientEmail, products, user } = req.body;

  try {
    await axios.post(
      `${process.env.DOMAIN}/api/orders`,
      {
        data: lodash.isEmpty(user)
          ? {
              clientName,
              clientAddress,
              clientPhone,
              clientEmail,
              products,
            }
          : {
              clientName,
              clientAddress,
              clientPhone,
              clientEmail,
              products,
              user,
            },
      },
      {
        headers: {
          Authorization: 'Bearer ' + process.env.TOKEN,
        },
      },
    );
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
