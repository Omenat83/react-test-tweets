import {
  Card,
  ImgContainer,
  Logo,
  Picture,
  AvatarContainer,
  Avatar,
  UserInfo,
  Tweets,
  Followers,
  UserBtn,
} from './UserCard.styled';
import logo from '../../Images/logo.png';
import picture from '../../Images/picture.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTweetsThunk } from 'redux/Tweets/thunks';
import { getFilter } from 'redux/selectors';

export const UserCard = ({ tweet }) => {
  const dispatch = useDispatch();
  const filter=useSelector(getFilter);

  const handleToggle = () => dispatch(toggleTweetsThunk(tweet));

  const { id, name, tweets, avatar, followers, following } = tweet;
  return (
    <Card id={id}>
      <ImgContainer>
        <Logo src={`${logo}`} alt="logo" />
        <Picture src={`${picture}`} alt={name} />
        <AvatarContainer>
          <Avatar src={avatar} alt="user photo" />
        </AvatarContainer>
      </ImgContainer>
      <UserInfo>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers
        </Followers>
        <UserBtn
          type="button"
          style={{ background: following ? '#5CD3A8' : '#EBD8FF' }}
          onClick={handleToggle}
        >
          {following ? 'following' : 'follow'}
        </UserBtn>
      </UserInfo>
    </Card>
  );
};
