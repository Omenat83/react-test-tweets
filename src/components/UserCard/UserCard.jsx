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
import { useDispatch } from 'react-redux';
import { toggleTweetsThunk } from 'redux/Tweets/thunks';
import PropTypes from 'prop-types';

export const UserCard = ({ tweet }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTweetsThunk(tweet));
  };

  const { id, user, tweets, avatar, followers, following } = tweet;
  return (
    <Card id={id}>
      <ImgContainer>
        <Logo src={`${logo}`} alt="logo" />
        <Picture src={`${picture}`} alt={user} />
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

UserCard.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
  }).isRequired,
};
