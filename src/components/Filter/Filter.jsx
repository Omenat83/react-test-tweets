import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Filter/filterSlice';
import { clearTweets } from 'redux/Tweets/tweetsSlice';
import PropTypes from 'prop-types';
import { FilterLabel, FilterSelect } from './Filter.styled';

export const Filter = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
    dispatch(clearTweets([]));
    setCurrentPage(1);
  };

  return (
    <FilterLabel>
      Select an option
      <FilterSelect defaultValue="" onChange={handleChangeFilter}>
        <option value="">Show all</option>
        <option value="false">Follow</option>
        <option value="true">Following</option>
      </FilterSelect>
    </FilterLabel>
  );
};

Filter.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
