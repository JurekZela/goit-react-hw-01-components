import { styled } from 'styled-components';

export const TransactionsBlock = styled.table`
  margin-top: 30px;
  box-shadow: 0 0 10px #c6cccced;
  border-spacing: 0;
  `;

  export const HeaderText = styled.th`
  margin: 0;
  padding: 0;
  font-size: 20px;
  margin-bottom: 5px;

  &:not(:last-child) {
  margin-right: 5px;
}
  `;

export const Header = styled.tr`
 display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  padding: 10px;
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.textHeader};
`;

  export const String = styled.tr`
   display: flex;
  justify-content: space-around;
  background-color: ${p => p.theme.colors.white}; 
  color: ${p => p.theme.colors.textTable};
  `;

  export const Type = styled.td`
    padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: ${p => p.theme.colors.textHeader};
  `;

export const Amount = styled.td`
   padding: 10px;
  width: inherit;
  font-weight: 100;
  font-size: 15px;
color: '#828282';
`;

export const Currency = styled.td`
   padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color:  ${p => p.theme.colors.textTable};
  `;