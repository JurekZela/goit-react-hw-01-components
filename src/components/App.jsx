import { Profile } from './Profile/Profile';
import user from '../path/user.json';

import { Statistics } from './Statistics/Statistics';
import statisticsData from '../path/statistics.data';

import { FriendList } from './FriendList/FriendList'
import friends from '../path/friends.json';

import { TransactionsHistory } from './Transactions/TransactionHistory';
import transactions from '../path/transactions.json';

import { GlobalStyles } from '../globalStyled.js';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div
    style={
      {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }
    >
      <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
       <Statistics
      title={statisticsData.title}
      stats={statisticsData}
      />
      <FriendList
      friends={friends}
       />
       <TransactionsHistory
       items={transactions} 
       />

      <GlobalStyles />
      </div>
      );
    };