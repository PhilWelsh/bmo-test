import React from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import ResultCard from "./ResultCard";
import Container from "./Container";

// const fakeResults = true;

// const fakeRestaurants = [
//   {
//     id: 1,
//     name: 'Johns fake Restaurant',
//     cuisines: ['Pizza Pie', 'spaghetti'],
//     price_range: 2,
//     user_rating: 3.6,
//     thumb: null,
//     location: 'Downtown',
//     city: 'Toronto',
//     url: '',
//   },
// ];

const useStyles = createUseStyles({
  cityTag: {
    padding: 5,
    margin: 5,
    border: "1px solid white",
    borderRadius: 5,
    fontSize: "1rem",
  },
});
const Restaurants = () => {
  const classes = useStyles();
  const restaurantData = useSelector(({ restaurants }) => restaurants);
  const { loading, error, restaurants, init } = restaurantData;
  return (
    <Container>
      {init ? (
        "Search for a restaurant using the fields above"
      ) : loading ? (
        "Searching..."
      ) : error ? (
        error.message
      ) : (
        <>
          {restaurants.length ? (
            <div>
              <p style={{ margin: 0 }}>Showing Results from:</p>
              {restaurantData.possibleCities.map((c) => (
                <span key={c} className={classes.cityTag}>
                  {c}
                </span>
              ))}
            </div>
          ) : (
            `No results available`
          )}
          {restaurants.map((r) => (
            <ResultCard key={r.id} restaurant={r} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Restaurants;
