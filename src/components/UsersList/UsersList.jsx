import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import toast from 'react-hot-toast';
import { UserListUl } from './UserList.styled';

export const UsersList = () => {
  const { tweets, isLoading, error } = useSelector(state => state.tweets);

  const filter = useSelector(getFilter);

  return (
    <>
      <UserListUl>
        {tweets.length > 0 &&
          tweets.map(
            tweet =>
              tweet.following.toString().includes(filter) && (
                <UserCard key={tweet.id} tweet={tweet} />
              )
          )}
      </UserListUl>
      {isLoading && <Loader />}
      {error && toast.error(error)}
    </>
  );
};
