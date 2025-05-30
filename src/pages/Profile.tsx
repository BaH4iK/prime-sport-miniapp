import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  // Sample user data if not provided by Telegram
  const userData = user || {
    first_name: 'Alex',
    last_name: 'Smith',
    username: 'alexsmith',
    photo_url: 'https://via.placeholder.com/150'
  };

  return (
    <ProfileContainer className="page-container">
      <h1 className="page-title">Profile</h1>
      
      <ProfileCard className="card">
        <ProfileHeader>
          <Avatar 
            src={userData.photo_url || 'https://via.placeholder.com/150'} 
            alt={userData.first_name} 
            className="avatar-lg"
          />
          <ProfileName>
            {userData.first_name} {userData.last_name}
          </ProfileName>
          <ProfileUsername>@{userData.username}</ProfileUsername>
        </ProfileHeader>
        
        <StatsSection>
          <StatItem>
            <StatValue>12</StatValue>
            <StatLabel>Events</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>8</StatValue>
            <StatLabel>Friends</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>3</StatValue>
            <StatLabel>Sports</StatLabel>
          </StatItem>
        </StatsSection>
      </ProfileCard>

      <section className="section">
        <h2 className="section-title">Your Interests</h2>
        <InterestsContainer>
          <InterestTag>Running</InterestTag>
          <InterestTag>Yoga</InterestTag>
          <InterestTag>Tennis</InterestTag>
          <InterestTag>Swimming</InterestTag>
          <InterestTag>Cycling</InterestTag>
          <InterestTag>+ Add</InterestTag>
        </InterestsContainer>
      </section>

      <section className="section">
        <h2 className="section-title">Achievements</h2>
        <AchievementCard className="card">
          <AchievementIcon>🏆</AchievementIcon>
          <div>
            <h3 className="card-title">Marathon Finisher</h3>
            <p className="card-content">Completed your first marathon!</p>
          </div>
        </AchievementCard>
        
        <AchievementCard className="card">
          <AchievementIcon>🔥</AchievementIcon>
          <div>
            <h3 className="card-title">Weekly Streak</h3>
            <p className="card-content">Completed activities for 4 weeks in a row</p>
          </div>
        </AchievementCard>
      </section>

      <section className="section">
        <h2 className="section-title">Settings</h2>
        <SettingsContainer>
          <SettingsItem>
            <SettingsLabel>Notifications</SettingsLabel>
            <ToggleSwitch />
          </SettingsItem>
          <SettingsItem>
            <SettingsLabel>Dark Mode</SettingsLabel>
            <ToggleSwitch />
          </SettingsItem>
          <SettingsItem>
            <SettingsLabel>Privacy</SettingsLabel>
            <ChevronRight>›</ChevronRight>
          </SettingsItem>
          <SettingsItem>
            <SettingsLabel>Help & Support</SettingsLabel>
            <ChevronRight>›</ChevronRight>
          </SettingsItem>
        </SettingsContainer>
      </section>
    </ProfileContainer>
  );
};

// Styled Components
const ProfileContainer = styled.div`
  padding-bottom: 70px;
`;

const ProfileCard = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 24px 16px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary-color);
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  margin-bottom: 16px;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text-color);
`;

const ProfileUsername = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  border-top: 1px solid var(--primary-light);
  border-bottom: 1px solid var(--primary-light);
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
  font-size: 14px;
  color: var(--text-color);
  margin-top: 4px;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const InterestTag = styled.div`
  background-color: var(--primary-light);
  color: var(--primary-dark);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

const AchievementCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const AchievementIcon = styled.div`
  font-size: 32px;
  background-color: var(--primary-light);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SettingsContainer = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
`;

const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--primary-light);

  &:last-child {
    border-bottom: none;
  }
`;

const SettingsLabel = styled.span`
  font-size: 16px;
  color: var(--text-color);
`;

const ToggleSwitch = styled.div`
  width: 50px;
  height: 24px;
  background-color: var(--primary-light);
  border-radius: 12px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--white);
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }

  &.active {
    background-color: var(--primary-color);

    &:before {
      transform: translateX(26px);
    }
  }
`;

const ChevronRight = styled.span`
  font-size: 24px;
  color: #ccc;
`;

export default Profile;
