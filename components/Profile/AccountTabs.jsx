import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './AccountTabs.module.scss';

export default function AccountTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      title_ru: 'Профиль',
      title_en: 'Profile',
      title_tr: 'Profil',
      title_kg: 'Профил',
      value: 'profile',
    },
    {
      title_ru: 'Заказы',
      title_en: 'Orders',
      title_tr: 'Siparişler',
      title_kg: 'Заказ',
      value: 'orders',
    },
  ];

  const lang = useSelector((state) => state.lang.lang);
  const logout = async () => {
    await axios.get('/api/logout');
    window.location.href = '/register';
  };
  return (
    <div className={style.tabs}>
      {tabs.map((tab, id) => {
        return (
          <div
            key={id + tab.title}
            className={`${style.tab} ${activeTab === tab.value ? style.active : ''}`}
            onClick={() => setActiveTab(tab.value)}>
            {lang === 'ru'
              ? tab.title_ru
              : lang === 'en'
              ? tab.title_en
              : lang === 'tr'
              ? tab.title_tr
              : tab.title_kg}
          </div>
        );
      })}
      <div className={style.tab} onClick={logout}>
        {lang === 'ru' ? 'Выйти' : lang === 'en' ? 'Logout' : lang === 'tr' ? 'Çıkış Yap' : 'Чыгуу'}
      </div>
    </div>
  );
}
