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
    color: ${({theme:{ colors } }) => colors.colorText};
    `;
  
  export const StatsList = styled.ul`
      width: 370px;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    `;
    
const backColorsForItem = props => {
 switch (props.$variant) {
  case "docx":
   return "rgba(215, 228, 200, 0.5)";
  case "mp3":
    return "rgba(100, 134, 188, 0.5)";
  case "pdf":
    return "rgba(175, 143, 2, 0.5)";
  case "mp4":
    return "rgba(71, 177, 156, 0.5)";
   default:
    return props.theme.colors.white;
  }
};

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: inherit;
    align-items: center;
    background-color: ${backColorsForItem}
    `;
  
export const Label = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: ${({theme:{ colors } }) => colors.colorLabel};
    margin-bottom: 5px;
    `;
  
  export const Percentage = styled.span`
    font-weight: 800;
    font-size: 20px;
    color: ${({theme:{ colors } }) => colors.colorText};
    `;