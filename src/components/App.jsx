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
      title={statisticsData[0].title}
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