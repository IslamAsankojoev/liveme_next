import { useRouter } from 'next/router';
import axios from 'axios';
import { setLoggedIn } from '../../redux/slices/userSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderBlock, AccountOrder, AccountTabs, AccountDetail, AccountRoles } from '../../components/index';
import lodash from 'lodash';
import { parseCookies } from 'nookies';

const Profile = ({ prevPath }) => {
  const [activeTab, setActiveTab] = React.useState('profile');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const router = useRouter();
  const logout = async () => {
    try {
      dispatch(setLoggedIn({}));
      router.push('/');
    } catch (error) {
      console.log(error, 'logout error');
    }
  };

  React.useEffect(() => {
    if (prevPath) {
      if (prevPath?.includes('checkout')) {
        setActiveTab('orders');
      }
    }

  }, []);

  return (
    <div className="container profile">
      <br />
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-5">
          <AccountTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="profile-orders">
            {activeTab === 'profile' ? <AccountDetail /> : null}
            {activeTab === 'orders' ? <AccountOrder /> : null}
            {activeTab === 'status' ? <AccountRoles roles={roles} /> : null}
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
