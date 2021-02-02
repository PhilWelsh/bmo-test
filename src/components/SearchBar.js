import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../store/actions/getRestaurants";
import { createUseStyles } from "react-jss";
import autocomplete from "./autoComplete";

const SearchBar = () => {
  const cityRef = useRef(null);
  const detailsRef = useRef(null);
  const dispatch = useDispatch();
  const [searchValues, setSearchValues] = useState({
    city: "",
    details: "",
    priceRangeLow: 0,
    priceRangeHigh: Infinity,
    ratingLow: 0,
    ratingHigh: 5,
  });
  const citiesList = useSelector((possibleCities) => {
    return possibleCities;
  });

  const useStyles = createUseStyles({
    SearchBar: {
      display: "flex",
      justifyContent: "space-around",
      "& label": {
        display: "block",
        textAlign: "left",
        fontSize: "1rem",
        marginBottom: 0,
      },
    },
    SearchInput: {},
  });

  const handleCityChange = (e) => {
    setSearchValues({ ...searchValues, city: e.target.value });
  };
  const handleDetailsChange = (e) => {
    setSearchValues({ ...searchValues, details: e.target.value });
  };

  useEffect(() => {
    const debouncedRequest = setTimeout(() => {
      dispatch(getRestaurants(searchValues));
    }, 1000);
    return () => clearTimeout(debouncedRequest);
  }, [searchValues]);

  useEffect(() => {
    // autocomplete(cityRef.current, possibleCities);
    console.log(citiesList.possibleCities);
  }, [citiesList]);
  const classes = useStyles();
  return (
    <>
      {/* ON INPUT TAKEN, THROW BACK THE EXACT NAMES OF CITIES THAT MATCH, EACH LINKED TO A SPECIFIC REQUEST */}
      <title>Looking for food in...</title>
      <div className={classes.SearchBar}>
        <div>
          <label>City</label>
          <input
            className={classes.SearchInput}
            // name="address-level2"
            type="text"
            id="cityInput"
            ref={cityRef}
            aria-label="false"
            placeholder={"placeholder"}
            onChange={handleCityChange}
            autoComplete={false}
          />
        </div>
        <div>
          <label>Details</label>
          <input
            className={classes.SearchInput}
            // name="address-level2"
            type="text"
            id="detailsInput"
            ref={detailsRef}
            aria-label="false"
            placeholder={"placeholder"}
            onChange={handleDetailsChange}
            autoComplete={false}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
