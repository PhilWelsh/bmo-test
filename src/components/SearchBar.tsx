import * as React from "react"
import { useState, useRef, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import { createUseStyles } from "react-jss";
import AsyncSelect from 'react-select/async'
// import getRestaurants from "../store/actions/getRestaurants";
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
  const handleSelectChange=(selectedOption:any)=>{
    console.log(selectedOption)
  }
  const loadOptions = useSelector(( {data}:any) => data ? data.possibleCities : null);

useEffect(()=>{
  console.log(loadOptions)
},loadOptions)

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
    setSearchValues({ ...searchValues, city: e.target.value });
    dispatch({type: 'GET_CITIES_REQUESTED', payload:{city: e.target.value}})    
  };
  const handleKeywordsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValues({ ...searchValues, keywords: e.target.value });
  };

  

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
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleSelectChange}
        />
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
