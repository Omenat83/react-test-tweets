import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets, getFilter, getFilteredTweets } from 'redux/selectors';
import { UserListUl } from './UserList.styled';
import { useEffect } from 'react';

export const UsersList = () => {
  // const filteredTweets = useSelector(getFilteredTweets);

  const { tweets, isLoading, error } = useSelector(state => state.tweets);

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const allTweets = useSelector(getAllTweets);

  // useEffect(() => {
  //   if (filter !== '') {
  //     console.log('true or false');
  //     const index = allTweets.tweets.findIndex(tweet => tweet.id === id);
  //     console.log('index for cut:>> ', index);
  //     dispatch(editTweets(index));
  //     //   state.tweets.splice(index, 1, action.payload);
  //   }
  // }, [allTweets]);

  return (
    <>
      <UserListUl>
        {tweets.length > 0 &&
          tweets.map(tweet => 
           (tweet.following.toString().includes(filter) && <UserCard
              key={tweet.id}
              tweet={tweet}
            // id={tweet.id}
            // name={tweet.user}
            // tweets={tweet.tweets}
            // avatar={tweet.avatar}
            // followers={tweet.followers}
            // following={tweet.following}
            />)
           
            
          )}
      </UserListUl>
      {isLoading && <Loader />}
    </>
  );
};
