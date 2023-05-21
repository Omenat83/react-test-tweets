import { useDispatch } from "react-redux";
import { setFilter } from "redux/Filter/filterSlice";
import { clearTweets } from "redux/Tweets/tweetsSlice";

export const Filter = ({setCurrentPage}) => {

  const dispatch = useDispatch();

const handleChangeFilter = (evt) => {
  dispatch(setFilter(evt.target.value));
  dispatch(clearTweets([]));
  setCurrentPage(1);

}
    return (
        <label>
          Selected
          <select
            defaultValue=""
            onChange={handleChangeFilter}
          >
            <option value="">Show all</option>
            <option value="false">Follow</option>
            <option value="true">Following</option>
          </select>
        </label>
      );
    
}