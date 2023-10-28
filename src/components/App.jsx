import { Profile } from './Profile/Profile';
import user from '../path/user.json';

import { Statistics } from './Statistics/Statistics';
import statisticsData from '../path/statistics.data';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
       <Statistics
      title="Upload stats" 
      stats={statisticsData}
      />
      </div>
      );
    };