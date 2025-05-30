import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isJoined, setIsJoined] = useState(false);
  
  // Sample event data - in a real app, you would fetch this based on the ID
  const event = {
    id: parseInt(id || '1'),
    title: 'Marathon Training',
    date: 'June 5, 2025',
    time: '7:00 AM',
    endTime: '9:00 AM',
    location: 'Central Park, New York',
    category: 'Running',
    description: 'Join us for a group marathon training session. This event is perfect for beginners and experienced runners alike. We will cover proper warm-up techniques, pacing strategies, and cool-down exercises. Bring water and comfortable running shoes!',
    organizer: {
      name: 'Sarah Johnson',
      image: 'https://via.placeholder.com/50'
    },
    participants: [
      { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Mike Brown', image: 'https://via.placeholder.com/50' },
      { id: 4, name: 'Lisa White', image: 'https://via.placeholder.com/50' },
      { id: 5, name: 'Alex Green', image: 'https://via.placeholder.com/50' },
      { id: 6, name: 'Emily Black', image: 'https://via.placeholder.com/50' },
      { id: 7, name: 'David Gray', image: 'https://via.placeholder.com/50' },
      { id: 8, name: 'Olivia Red', image: 'https://via.placeholder.com/50' },
    ],
    image: 'https://via.placeholder.com/400x200',
    weather: {
      temperature: '68°F',
      condition: 'Sunny',
      icon: '☀️'
    }
  };

  const handleJoinEvent = () => {
    setIsJoined(!isJoined);
    
    // In a real app, you would make an API call to join/leave the event
    if (!isJoined) {
      // Show Telegram notification
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.showPopup({
          title: 'Success!',
          message: `You've joined ${event.title}`,
          buttons: [{ type: 'ok' }]
        });
      }
    }
  };

  const handleShare = () => {
    // In a real app, you would implement sharing functionality
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.showPopup({
        title: 'Share Event',
        message: 'Share this event with your friends!',
        buttons: [{ type: 'ok' }]
      });
    }
  };

  return (
    <EventDetailsContainer className="page-container">
      <BackButton to="/events">← Back</BackButton>
      
      <EventImage src={event.image} alt={event.title} />
      
      <EventHeader>
        <EventTitle>{event.title}</EventTitle>
        <CategoryBadge className="badge">{event.category}</CategoryBadge>
      </EventHeader>
      
      <EventInfoSection>
        <EventInfoItem>
          <EventInfoIcon>📅</EventInfoIcon>
          <EventInfoText>
            <strong>{event.date}</strong>
            <span>{event.time} - {event.endTime}</span>
          </EventInfoText>
        </EventInfoItem>
        
        <EventInfoItem>
          <EventInfoIcon>📍</EventInfoIcon>
          <EventInfoText>
            <strong>{event.location}</strong>
            <span>View on map</span>
          </EventInfoText>
        </EventInfoItem>
        
        <EventInfoItem>
          <EventInfoIcon>{event.weather.icon}</EventInfoIcon>
          <EventInfoText>
            <strong>{event.weather.temperature}</strong>
            <span>{event.weather.condition}</span>
          </EventInfoText>
        </EventInfoItem>
      </EventInfoSection>
      
      <EventSection>
        <SectionTitle>About</SectionTitle>
        <EventDescription>{event.description}</EventDescription>
      </EventSection>
      
      <EventSection>
        <SectionTitle>Organizer</SectionTitle>
        <OrganizerInfo>
          <OrganizerAvatar src={event.organizer.image} alt={event.organizer.name} />
          <OrganizerName>{event.organizer.name}</OrganizerName>
          <ContactButton>Contact</ContactButton>
        </OrganizerInfo>
      </EventSection>
      
      <EventSection>
        <SectionTitle>Participants ({event.participants.length})</SectionTitle>
        <ParticipantsList>
          {event.participants.map(participant => (
            <ParticipantItem key={participant.id}>
              <ParticipantAvatar src={participant.image} alt={participant.name} />
              <ParticipantName>{participant.name}</ParticipantName>
            </ParticipantItem>
          ))}
          <ViewAllButton>View All</ViewAllButton>
        </ParticipantsList>
      </EventSection>
      
      <ActionButtons>
        <JoinButton 
          className={`btn ${isJoined ? 'btn-outline' : ''}`}
          onClick={handleJoinEvent}
        >
          {isJoined ? 'Leave Event' : 'Join Event'}
        </JoinButton>
        <ShareButton onClick={handleShare}>Share</ShareButton>
      </ActionButtons>
    </EventDetailsContainer>
  );
};

// Styled Components
const EventDetailsContainer = styled.div`
  padding-bottom: 100px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: 16px;
`;

const EventHeader = styled.div`
  margin-bottom: 20px;
`;

const EventTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-color);
`;

const CategoryBadge = styled.span`
  display: inline-block;
`;

const EventInfoSection = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary-color);
`;

const EventInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EventInfoIcon = styled.span`
  font-size: 24px;
  margin-right: 16px;
  width: 24px;
  text-align: center;
`;

const EventInfoText = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  span {
    font-size: 14px;
    color: #777;
  }
`;

const EventSection = styled.section`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-color);
`;

const EventDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
`;

const OrganizerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const OrganizerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

const OrganizerName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: auto;
`;

const ContactButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-light);
  }
`;

const ParticipantsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ParticipantItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
`;

const ParticipantAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

const ParticipantName = styled.span`
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const ViewAllButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ActionButtons = styled.div`
  position: fixed;
  bottom: 70px;
  left: 0;
  right: 0;
  display: flex;
  padding: 16px;
  background-color: var(--white);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;

const JoinButton = styled.button`
  flex: 1;
  margin-right: 16px;
`;

const ShareButton = styled.button`
  background-color: var(--light-gray);
  color: var(--text-color);
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
`;

export default EventDetails;
