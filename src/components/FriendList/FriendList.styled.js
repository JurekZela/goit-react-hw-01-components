import { styled } from 'styled-components'; 

export const FriendsBlock = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
  width: 370px;
  `;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  width: inherit;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;
  `;

  export const Status = styled.span`
   width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  `;

  export const Avatar = styled.img`
    width: 100px;
  margin-right: 10px;
  `;

  export const Name = styled.p`
    font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: ${p => p.theme.colors.colorText};
  `;