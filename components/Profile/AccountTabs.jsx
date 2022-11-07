import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './AccountTabs.module.scss';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

export default function AccountTabs({ activeTab, setActiveTab }) {
  const router = useRouter();
  const tabs = [
    {
      title_ru: 'Профиль',
      title_en: 'Profile',
      title_tr: 'Profil',
      title_kg: 'Профил',
      title_pl: 'Profil',
      value: 'profile',
    },
    {
      title_ru: 'Заказы',
      title_en: 'Orders',
      title_tr: 'Siparişler',
      title_kg: 'Заказ',
      title_pl: 'Zamówienia',
      value: 'orders',
    }
  ];

  const lang = useSelector((state) => state.lang.lang);
  const logout = async () => {
    destroyCookie(null, 'access_token');
    router.reload();
  };
  return (
    <div className={style.tabs}>
      {tabs.map((tab, id) => {
        return (
          <div
            key={id + tab.value}
            className={`${style.tab} ${activeTab === tab.value ? style.active : ''}`}
            onClick={() => setActiveTab(tab.value)}>
            {tab[`title_${lang}`]}
          </div>
        );
      })}
      <div className={style.tab} onClick={logout}>
        {lang === 'ru' ? 'Выйти' : lang === 'en' ? 'Logout' : lang === 'tr' ? 'Çıkış Yap' : 'Чыгуу'}
      </div>
    </div>
  );
}
