import React from 'react';
import { OrderBlock } from '../../components/index';
import lodash from 'lodash';
import { profileText } from '../../public/locales/profile/registerCollection';
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function AccountOrder({ user }) {
  const lang = useSelector((state) => state.lang.lang);
  const [orders, setOrders] = React.useState([])

    React.useEffect(()=>{
        axios.get(`${process.env.SERVER_DOMAIN}/api/orders/`).then((res)=>{
        setOrders(res.data)
    })
    }, [])
  return (
    <>
      {!lodash.isEmpty(user.orders) ? (
        <>
          <h2 align="center">{profileText.profile.orders.order[lang]}</h2>
          <div className="titles">
            <p className="number">{profileText.profile.orders.number[lang]}</p>
            <p className="created">{profileText.profile.orders.date[lang]}</p>
            <p className="price">{profileText.profile.orders.sum[lang]}</p>
            <p className="payment_method">{profileText.profile.orders.paymentMethod[lang]}</p>
            <p className="phone">{profileText.profile.orders.contact_phone[lang]}</p>
          </div>
          {user.orders?.map((item) => <OrderBlock {...item} />).reverse()}
        </>
      ) : (
        <h2 align="center">{profileText.profile.orders.empty_orders[lang]}</h2>
      )}
    </>
  );
}
