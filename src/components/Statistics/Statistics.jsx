import { StatisticsForm, Title, StatsList, Item, Label, Percentage } from './Statistics.styled.js';

export const  Statistics = ({title, stats}) => {
    return (
        <StatisticsForm>
  <Title>Upload stats</Title>

  <StatsList>
    <Item $variant="docx">
      <Label>.docx</Label>
      <Percentage>4%</Percentage>
    </Item>
    <Item $variant="mp3">
      <Label>.mp3</Label>
      <Percentage>14%</Percentage>
    </Item>
    <Item $variant="pdf">
      <Label>.pdf</Label>
      <Percentage>41%</Percentage>
    </Item>
    <Item $variant="mp4">
      <Label>.mp4</Label>
      <Percentage>12%</Percentage>
    </Item>
  </StatsList>
</StatisticsForm>
    )  
};