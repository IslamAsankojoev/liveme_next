import axios from 'axios';
import React from 'react';
import style from './AccountTabs.module.scss';

export default function AccountTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { title: 'Профиль', value: 'profile' },
    { title: 'Заказы', value: 'orders' },
  ];
  const logout = async () => {
    await axios.get('/api/logout');
    window.location.href = '/register';
  };
  return (
    <div className={style.tabs}>
      {tabs.map((tab) => {
        return (
          <div
            className={`${style.tab} ${activeTab === tab.value ? style.active : ''}`}
            onClick={() => setActiveTab(tab.value)}>
            {tab.title}
          </div>
        );
      })}
      <div className={style.tab} onClick={logout}>
        Выйти
      </div>
    </div>
  );
}
