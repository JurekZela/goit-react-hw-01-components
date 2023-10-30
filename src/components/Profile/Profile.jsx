import { PageTitle, Description, Stats, StatsBlock, Label, Quantity, Name, Tag, Location, PhotoProfile } from './Profile.styled.js';

export const Profile = ({
  username, 
  tag,
  location,
  avatar,
  stats: { followers, views, likes } }) => {
    return (
      <PageTitle >
        <Description>
            <PhotoProfile
            src={avatar}
            alt={username}
            />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
      </Description>

    <Stats>
      <StatsBlock>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsBlock>
      <StatsBlock>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsBlock>
      <StatsBlock>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsBlock>
    </Stats>
  </PageTitle>
  )
};