import * as React from "react"
import { useState,  useRef } from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import getCities from "../store/actions/getCities";
import Container from "./Container";

const SearchBar = () => {
  const cityRef = useRef(null);
  const keywordsRef = useRef(null);
  const dispatch = useDispatch();
  const [searchValues, setSearchValues] = useState({
    city: "",
    keywords: "",
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
        maxWidth:300,
        width:"100%",
        textAlign: "left",
        fontSize: "1rem",
        marginBottom: 0,
      },
      "& input": {
        display: "block",
        width:"-webkit-fill-available"
      },
    },
    SearchInput: {
      borderRadius: 5,
      padding: "7px 10px",
    },
  });

  const handleCityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getCities);
    setSearchValues({ ...searchValues, city: e.target.value });
  };
  const handleKeywordsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues({ ...searchValues, keywords: e.target.value });
  };
  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   ()=>
  //   return
  //   //  const debouncedRequest = setTimeout(() => {}, 0);
  //   // return () => clearTimeout(debouncedRequest);   
  //   // if (searchValues.city.length > 0) {}
  // }, [searchValues]);

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
        <label htmlFor="keywordsInput">
          Keywords
          <input
            className={classes.SearchInput}
            type="text"
            id="keywordsInput"
            ref={keywordsRef}
            aria-label="keywordsInput"
            placeholder="other search keywords"
            onChange={handleKeywordsChange}
          />
        </label>
      </form>
    </Container>
  );
};

export default SearchBar;
