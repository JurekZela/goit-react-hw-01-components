import { FriendsBlock, Item, Status, Name, Avatar } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsBlock>
        {
        friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
            <Status>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar"/>
            <Name>{name}</Name>
            </Item>
        ))
        }
        </FriendsBlock>
        )
    };