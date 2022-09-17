import { useRouter } from 'next/router';
import axios from 'axios';
import { setLoggedIn } from '../../redux/slices/userSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderBlock } from '../../components/index';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/logout');
      dispatch(setLoggedIn({}));
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container profile">
      <div className="profile-block-logout">
        <h2>Профиль</h2>
        <button onClick={logout} className="genric-btn danger radius" style={{ fontSize: '1.4em' }}>
          Выйти
        </button>
      </div>
      <div className="profile-block">
        <div className="profile-block-info">
          <h3 className="username">{user.username}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2>Заказы</h2>
      <div className="profile-orders">
        {user?.orders?.map((item) => <OrderBlock {...item} />).reverse()}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
