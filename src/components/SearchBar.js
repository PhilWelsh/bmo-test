import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../store/actions/getRestaurants";
import { createUseStyles } from "react-jss";

const SearchBar = ({ placeholder, label }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const useStyles = createUseStyles({
    SearchBar: {
      color: "red",
    },
  });

  // on keyChange, throttle search request
  // autocomplete feature to match === results
  const handleChange = (e) => {
    // setInputValue()
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debouncedRequest = setTimeout(() => {
      // Send Axios request here
      console.log(inputValue);
      dispatch(getRestaurants(inputValue));
    }, 1000);
    return () => clearTimeout(debouncedRequest);
  }, [inputValue]);

  const classes = useStyles();
  return (
    <>
      {/* ON INPUT TAKEN, THROW BACK THE EXACT NAMES OF CITIES THAT MATCH, EACH LINKED TO A SPECIFIC REQUEST */}
      <button onClick={() => console.log(inputValue)}></button>
      <label>{label}</label>
      <input
        className={classes.SearchBar}
        type="text"
        id=""
        aria-label="false"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SearchBar;
