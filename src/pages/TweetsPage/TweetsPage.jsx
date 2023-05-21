import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getTweetsThunk } from 'redux/Tweets/thunks';
import { getFilter } from 'redux/selectors';
import { LoadMoreBtn } from 'components/Button/Button';
import { clearTweets } from 'redux/Tweets/tweetsSlice';
import { UsersList } from 'components/UsersList/UsersList';
import { setFilter } from 'redux/Filter/filterSlice';
import { Filter } from 'components/Filter/Filter';

const TweetsPage = () => {
  const backLink = useRef('/');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const { tweets, isLoading, error } = useSelector(state => state.tweets);

  useEffect(() => {
    dispatch(getTweetsThunk({ page: currentPage, following: filter }));
  }, [dispatch, currentPage, filter]);

  // скидання стору при розмонтуванні сторінки
  useEffect(() => {
    return () => {
      setCurrentPage(1);
      dispatch(clearTweets([]));
    };
  }, []);

  // збільшуємо номер сторінки
  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Link to={backLink.current}>
        <IoMdArrowRoundBack />
        Back to main page
      </Link>
      <Filter setCurrentPage={setCurrentPage}/>
      <p>tweets</p>
      {tweets.length > 0 ? <UsersList /> : <p>Sorry, no contacts yet...</p>}
      <LoadMoreBtn onClick={onLoadMore} />
    </div>
  );
};

export default TweetsPage;
