import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import './App.css';

// Access to Telegram WebApp API
declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Initialize Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand(); // Expand the WebApp to take up the full screen
    tg.enableClosingConfirmation(); // Ask for confirmation before closing the app

    // Get user data from Telegram
    if (tg.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }

    // Set the theme based on Telegram's theme
    document.documentElement.style.setProperty(
      '--primary-color', 
      '#FFC0CB' // Light pink as our primary color
    );

    // Set the header color
    tg.setHeaderColor('#FFC0CB');
    tg.setBackgroundColor('#FFFFFF');
  }, []);

  return (
    <Router>
      <AppContainer>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
        </MainContent>
        <BottomNavigation>
          <NavItem to="/">
            <NavIcon>🏠</NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem to="/events">
            <NavIcon>🏆</NavIcon>
            <NavText>Events</NavText>
          </NavItem>
          <NavItem to="/profile">
            <NavIcon>👤</NavIcon>
            <NavText>Profile</NavText>
          </NavItem>
        </BottomNavigation>
      </AppContainer>
    </Router>
  );
};

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--white);
`;

const MainContent = styled.main`
  flex: 1;
  padding-bottom: 70px; // Space for the bottom navigation
`;

const BottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  padding: 8px 0;
  width: 33.33%;
  transition: color 0.3s;

  &:hover, &.active {
    color: var(--primary-color);
  }
`;

const NavIcon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

const NavText = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export default App;
