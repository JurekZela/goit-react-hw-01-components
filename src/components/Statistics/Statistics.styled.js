import { styled } from 'styled-components'; 

export const StatisticsForm = styled.section`
  display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    box-shadow: 0 0 10px #c6cccced;
    margin-top: 30px;
    `;
  
export const Title = styled.h2`
font-weight: 700;
    font-size: 30px;
    margin-bottom: 15px;
    color: ${p => p.theme.colors.colorText};
    `;
  
  export const StatsList = styled.ul`
      width: 370px;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    `;
  
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: inherit;
    align-items: center;
    `;
  
export const Label = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: ${p => p.theme.colors.colorLabel};
    margin-bottom: 5px;
    `;
  
  export const Percentage = styled.span`
    font-weight: 800;
    font-size: 20px;
    color: ${p => p.theme.colors.colorText};
    `;