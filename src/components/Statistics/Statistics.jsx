import { StatisticsForm, Title, StatsList, Item, Label, Percentage } from './Statistics.styled.js';

export const  Statistics = ({title, stats}) => {
    return (
        <StatisticsForm>
          <Title>{title &&{title}}</Title>
  <StatsList>
    <Item $variant="docx">
      <Label>.docx</Label>
      <Percentage>{stats[0].percentage}</Percentage>
    </Item>
    <Item $variant="mp3">
      <Label>.mp3</Label>
      <Percentage>{stats[1].percentage}</Percentage>
    </Item>
    <Item $variant="pdf">
      <Label>.pdf</Label>
      <Percentage>{stats[2].percentage}</Percentage>
    </Item>
    <Item $variant="mp4">
      <Label>.mp4</Label>
      <Percentage>{stats[3].percentage}</Percentage>
    </Item>
  </StatsList>
</StatisticsForm>
    )  
};