import { useEffect, useRef, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getTweetsThunk } from 'redux/Tweets/thunks';
import { getFilter } from 'redux/selectors';
import { LoadMoreBtn } from 'components/Button/Button';
import { clearTweets } from 'redux/Tweets/tweetsSlice';
import { UsersList } from 'components/UsersList/UsersList';
import { Filter } from 'components/Filter/Filter';
import { BackLink, TweetsContainer, TweetsTop } from './TweetsPage.styled';
import { Loader } from 'components/Loader/Loader';

const TweetsPage = () => {
  const backLink = useRef('/');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const { tweets, isLoading, endList } = useSelector(state => state.tweets);

  useEffect(() => {
    dispatch(getTweetsThunk({ page: currentPage, following: filter }));
  }, [dispatch, currentPage, filter]);

  // скидання стору при розмонтуванні сторінки
  useEffect(() => {
    return () => {
      setCurrentPage(1);
      dispatch(clearTweets([]));
    };
  }, [dispatch]);

  // збільшуємо номер сторінки
  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <TweetsContainer>
      <TweetsTop>
        <BackLink to={backLink.current}>
          <IoMdArrowRoundBack />
          Back to main page
        </BackLink>
        <Filter setCurrentPage={setCurrentPage} />
      </TweetsTop>
      {tweets.length > 0 && <UsersList />}
      {isLoading && currentPage === 1 && <Loader />}
      {!endList && <LoadMoreBtn onClick={onLoadMore} />}
    </TweetsContainer>
  );
};

export default TweetsPage;
