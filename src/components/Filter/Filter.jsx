export const Filter = () => {

    // useEffect(() => {
    //     handleChange(selectedOption);
    //   }, [selectedOption, handleChange]);
    

    return (
        <label>
          Selected
          <select
            defaultValue=""
            // onChange={handleChangeSelect}
          >
            <option value="">Show all</option>
            <option value="false">Follow</option>
            <option value="true">Following</option>
          </select>
        </label>
      );
    
}