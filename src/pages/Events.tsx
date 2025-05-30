import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Marathon Training',
      date: 'June 5, 2025',
      time: '7:00 AM',
      location: 'Central Park',
      category: 'running',
      participants: 24,
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 2,
      title: 'Yoga in the Park',
      date: 'June 7, 2025',
      time: '9:00 AM',
      location: 'Riverside Park',
      category: 'yoga',
      participants: 15,
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 3,
      title: 'Tennis Tournament',
      date: 'June 10, 2025',
      time: '2:00 PM',
      location: 'City Tennis Courts',
      category: 'tennis',
      participants: 32,
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 4,
      title: 'Cycling Group Ride',
      date: 'June 12, 2025',
      time: '6:30 AM',
      location: 'Bike Path',
      category: 'cycling',
      participants: 18,
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 5,
      title: 'Swimming Workshop',
      date: 'June 15, 2025',
      time: '10:00 AM',
      location: 'Community Pool',
      category: 'swimming',
      participants: 12,
      image: 'https://via.placeholder.com/80'
    }
  ];

  // Filter events based on selected category
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <EventsContainer className="page-container">
      <h1 className="page-title">Events</h1>
      
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'running'} 
          onClick={() => setFilter('running')}
        >
          Running
        </FilterButton>
        <FilterButton 
          active={filter === 'yoga'} 
          onClick={() => setFilter('yoga')}
        >
          Yoga
        </FilterButton>
        <FilterButton 
          active={filter === 'tennis'} 
          onClick={() => setFilter('tennis')}
        >
          Tennis
        </FilterButton>
        <FilterButton 
          active={filter === 'cycling'} 
          onClick={() => setFilter('cycling')}
        >
          Cycling
        </FilterButton>
        <FilterButton 
          active={filter === 'swimming'} 
          onClick={() => setFilter('swimming')}
        >
          Swimming
        </FilterButton>
      </FilterContainer>

      <SearchBar placeholder="Search events..." />

      <EventsList>
        {filteredEvents.map(event => (
          <EventCard key={event.id} className="card">
            <EventLink to={`/events/${event.id}`}>
              <EventHeader>
                <EventInfo>
                  <EventTitle className="card-title">{event.title}</EventTitle>
                  <EventDate className="card-content mb-1">
                    {event.date} • {event.time}
                  </EventDate>
                  <EventLocation className="card-content">
                    {event.location}
                  </EventLocation>
                  <CategoryBadge className="badge mt-1">
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </CategoryBadge>
                </EventInfo>
                <EventImage src={event.image} alt={event.title} />
              </EventHeader>
            </EventLink>
            <EventFooter>
              <ParticipantsInfo>
                <ParticipantsIcon>👥</ParticipantsIcon>
                <ParticipantsCount>{event.participants} participants</ParticipantsCount>
              </ParticipantsInfo>
              <JoinButton className="btn">Join</JoinButton>
            </EventFooter>
          </EventCard>
        ))}
      </EventsList>

      <CreateEventButton className="btn">
        + Create Event
      </CreateEventButton>
    </EventsContainer>
  );
};

// Styled Components
const EventsContainer = styled.div`
  padding-bottom: 70px;
`;

const FilterContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 8px 0;
  margin-bottom: 16px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface FilterButtonProps {
  active: boolean;
}

const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--primary-light)'};
  color: ${props => props.active ? 'var(--white)' : 'var(--primary-dark)'};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'var(--primary-color)'};
    color: var(--white);
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin-bottom: 20px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const EventCard = styled.div`
  overflow: hidden;
  padding: 0;
`;

const EventLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 16px;
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventInfo = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  margin-bottom: 8px;
`;

const EventDate = styled.p`
  color: var(--text-color);
`;

const EventLocation = styled.p`
  color: var(--text-color);
`;

const CategoryBadge = styled.span`
  display: inline-block;
  margin-top: 8px;
`;

const EventImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const EventFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--primary-light);
  background-color: var(--light-gray);
`;

const ParticipantsInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantsIcon = styled.span`
  margin-right: 8px;
  font-size: 18px;
`;

const ParticipantsCount = styled.span`
  font-size: 14px;
  color: var(--text-color);
`;

const JoinButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
`;

const CreateEventButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  border-radius: 50px;
  padding: 12px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

export default Events;
