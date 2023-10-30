import { Profile } from './Profile/Profile';
import user from '../path/user.json';

import { Statistics } from './Statistics/Statistics';
import statisticsData from '../path/statistics.data';

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

      <GlobalStyles />
      </div>
      );
    };

    // style={{
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    //   fontSize: 40,
    //   color: '#010101'
    // }}