import { Profile } from './Profile/Profile';
import user from '../path/user.json';

import { Statistics } from './Statistics/Statistics';
import statisticsData from '../path/statistics.data';

import { FriendList } from './FriendList/FriendList'
import friends from '../path/friends.json';

import { GlobalStyles } from '../globalStyled.js';

export const App = () => {
  return (
    <div
    style={
      {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }>
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
      <FriendList
      friends={friends}
       />

      <GlobalStyles />
      </div>
      );
    };