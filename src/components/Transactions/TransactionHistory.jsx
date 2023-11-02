import { TransactionsBlock, String, Header, Type, Amount, Currency, HeaderText } from './TransactionHistory.styled';

export const TransactionsHistory = ({ items  }) => {
    return (
     <TransactionsBlock>
         <thead>
          <Header>
            <HeaderText>Type</HeaderText>
            <HeaderText>Amount</HeaderText>
            <HeaderText>Currency</HeaderText>
          </Header>
         </thead>
         {items.map(({ currency, amount, type, id }) => (
        <tbody key={id}>
          <String>
            <Type>{type}</Type>
            <Amount>{amount}</Amount>
            <Currency>{currency}</Currency>
          </String>
        </tbody>
     ))
    }
   </TransactionsBlock>
  )
};

