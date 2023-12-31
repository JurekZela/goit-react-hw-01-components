import styled from 'styled-components';

export const PageTitle = styled.div`
 width: 1000px;
  background-color: ${({theme:{ colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
    `;

    export const Description = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #7e6f7498 solid 2px;
  padding-top: 15px;
`;

export const PhotoProfile = styled.img`
  width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
  `;

export const Stats = styled.ul`
    display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #BFF8EE;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  `;

export const StatsBlock = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: ${({theme:{ colors } }) => colors.colorLabel};
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: ${({theme:{ colors } }) => colors.colorText};
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: ${({theme:{ colors } }) => colors.colorText};
  `;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${({theme:{ colors } }) => colors.colorText};
  margin-bottom: 15px;
`;

export const Location = styled.p`
 font-weight: 700;
  font-size: 20px;
  color: ${({theme:{ colors } }) => colors.colorText};
  margin-bottom: 15px;
`;