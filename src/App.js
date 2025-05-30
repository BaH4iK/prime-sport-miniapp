import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверяем, доступен ли Telegram WebApp API
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      
      // Расширяем приложение на весь экран
      tg.expand();
      
      // Включаем подтверждение закрытия
      tg.enableClosingConfirmation();
      
      // Получаем данные пользователя
      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      }
      
      // Устанавливаем цвета
      document.documentElement.style.setProperty('--primary-color', '#FFC0CB');
      tg.setHeaderColor('#FFC0CB');
      tg.setBackgroundColor('#FFFFFF');
    }
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="page-title">PrimeSport</h1>
        <p className="user-greeting">
          {user ? `Привет, ${user.first_name}!` : 'Добро пожаловать в PrimeSport!'}
        </p>
      </header>
      
      <main className="main-content">
        <section className="section">
          <h2 className="section-title">Ближайшие мероприятия</h2>
          
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Марафон</h3>
                <p className="card-content">5 июня, 2025 • 7:00</p>
                <p className="card-content">Центральный парк</p>
                <span className="badge">Бег</span>
              </div>
              <div className="event-image"></div>
            </div>
            <button className="btn btn-block">Присоединиться</button>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Йога в парке</h3>
                <p className="card-content">7 июня, 2025 • 9:00</p>
                <p className="card-content">Парк Победы</p>
                <span className="badge">Йога</span>
              </div>
              <div className="event-image"></div>
            </div>
            <button className="btn btn-block">Присоединиться</button>
          </div>
        </section>
      </main>
      
      <nav className="bottom-nav">
        <div className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Главная</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🏆</span>
          <span className="nav-text">События</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-text">Профиль</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
