import { useRouter } from 'next/router';
import axios from 'axios';
import { setLoggedIn } from '../../redux/slices/userSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderBlock, AccountOrder, AccountTabs, AccountDetail } from '../../components/index';
import lodash from 'lodash';

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState('profile');

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
      <br />
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-5">
          <AccountTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="profile-orders">
            {activeTab === 'profile' ? <AccountDetail /> : <AccountOrder user={user} />}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
