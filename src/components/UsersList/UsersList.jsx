import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { useSelector } from 'react-redux';
import { getAllTweets, getFilteredTweets } from 'redux/selectors';
import { UserListUl } from './UserList.styled';

export const UsersList = () => {
  // const filteredTweets = useSelector(getFilteredTweets);

  const { tweets, isLoading, error } = useSelector(state => state.tweets);

  return (
    <>
      <UserListUl>
        {tweets.length > 0 && (
          tweets.map(tweet => (
            <UserCard
              key={tweet.id}
              tweet={tweet}
              // id={tweet.id}
              // name={tweet.user}
              // tweets={tweet.tweets}
              // avatar={tweet.avatar}
              // followers={tweet.followers}
              // following={tweet.following}
            />
          ))
        ) }
      </UserListUl>
      {isLoading && <Loader />}
    </>
  );
};
