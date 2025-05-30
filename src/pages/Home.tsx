import React from 'react';
import styled from 'styled-components';

interface HomeProps {
  user: any;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <HomeContainer className="page-container">
      <WelcomeCard className="card">
        <h1 className="page-title">PrimeSport</h1>
        <UserGreeting>
          {user ? `Welcome, ${user.first_name}!` : 'Welcome to PrimeSport!'}
        </UserGreeting>
        <p className="card-content">
          Your ultimate sports companion for finding events, tracking your activities, and connecting with other sports enthusiasts.
        </p>
      </WelcomeCard>

      <section className="section">
        <h2 className="section-title">Upcoming Events</h2>
        <EventCard className="card">
          <div className="flex flex-between">
            <div>
              <h3 className="card-title">Marathon Training</h3>
              <p className="card-content mb-1">June 5, 2025 • 7:00 AM</p>
              <p className="card-content">Central Park</p>
              <span className="badge mt-1">Running</span>
            </div>
            <EventImage src="https://via.placeholder.com/80" alt="Marathon" />
          </div>
          <button className="btn btn-block mt-2">Join Event</button>
        </EventCard>

        <EventCard className="card">
          <div className="flex flex-between">
            <div>
              <h3 className="card-title">Yoga in the Park</h3>
              <p className="card-content mb-1">June 7, 2025 • 9:00 AM</p>
              <p className="card-content">Riverside Park</p>
              <span className="badge mt-1">Yoga</span>
            </div>
            <EventImage src="https://via.placeholder.com/80" alt="Yoga" />
          </div>
          <button className="btn btn-block mt-2">Join Event</button>
        </EventCard>

        <div className="text-center mt-2">
          <a href="/events" className="btn btn-outline">View All Events</a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Your Activity</h2>
        <ActivityCard className="card">
          <div className="flex flex-between">
            <div>
              <h3 className="card-title">Weekly Stats</h3>
              <StatsGrid>
                <StatItem>
                  <StatValue>3</StatValue>
                  <StatLabel>Events</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>12.5</StatValue>
                  <StatLabel>Miles</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>4</StatValue>
                  <StatLabel>Hours</StatLabel>
                </StatItem>
              </StatsGrid>
            </div>
          </div>
        </ActivityCard>
      </section>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  padding-bottom: 70px;
`;

const WelcomeCard = styled.div`
  background-color: var(--primary-light);
  border-left: 4px solid var(--primary-color);
  text-align: center;
  padding: 24px 16px;
`;

const UserGreeting = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0;
  color: var(--primary-dark);
`;

const EventCard = styled.div`
  margin-bottom: 16px;
`;

const EventImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const ActivityCard = styled.div`
  background-color: var(--white);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: var(--text-color);
  margin-top: 4px;
`;

export default Home;
