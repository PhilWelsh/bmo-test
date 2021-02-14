import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import getRestaurants from "../store/actions/getRestaurants";
import Container from "./Container";

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

  // for autocomplete
  // const citiesList = useSelector(
  //   (possibleCities) => possibleCities.possibleCities || "none"
  // );

  const useStyles = createUseStyles({
    SearchBar: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& label": {
        display: "block",
        textAlign: "left",
        fontSize: "1rem",
        marginBottom: 0,
      },
      "& input": {
        display: "block",
      },
    },
    SearchInput: {},
  });

  const handleCityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues({ ...searchValues, city: e.target.value });
  };
  const handleDetailsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues({ ...searchValues, details: e.target.value });
  };
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (searchValues.city.length > 0) {
      const debouncedRequest = setTimeout(() => {
        dispatch(getRestaurants(searchValues));
      }, 1000);
      return () => clearTimeout(debouncedRequest);
    }
  }, [searchValues]);

  // useEffect(() => {
  //   autocomplete(cityRef.current, possibleCities);
  //   console.log('possibleCities');
  //   console.log(citiesList?.possibleCities);
  // }, [citiesList]);
  const classes = useStyles();
  return (
    <Container>
      {/* ON INPUT TAKEN, THROW BACK THE EXACT NAMES OF CITIES THAT MATCH, EACH LINKED TO A SPECIFIC REQUEST */}
      <h1>Looking for food in...</h1>
      <form className={classes.SearchBar}>
        <label htmlFor="cityInput">
          City
          <input
            className={classes.SearchInput}
            name="address-level2"
            type="text"
            id="cityInput"
            ref={cityRef}
            aria-label="cityInput"
            placeholder="enter a city"
            onChange={handleCityChange}
          />
        </label>
        <label htmlFor="detailsInput">
          Details
          <input
            className={classes.SearchInput}
            type="text"
            id="detailsInput"
            ref={detailsRef}
            aria-label="detailsInput"
            placeholder="other search details"
            onChange={handleDetailsChange}
          />
        </label>
      </form>
    </Container>
  );
};

export default SearchBar;
