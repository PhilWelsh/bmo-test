import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { createUseStyles } from "react-jss";
// import {Restaurant} from "../interfaces"
import Container from "./Container";
// import ResultCard from "./ResultCard";

// const useStyles = createUseStyles({
//   cityTag: {
//     padding: 5,
//     margin: 5,
//     border: "1px solid white",
//     borderRadius: 5,
//     fontSize: "1rem",
//   },
// });

// interface RestaurantData{
//       loading:boolean, 
//       error:{message:string},
//       restaurants:Restaurant[],
//       init:string,
//       possibleCities:string[]
// }
// interface Restaurants{
//   data:RestaurantData
// }
const RestaurantsList = () => {
  // const classes = useStyles();
  // const restaurantData = useSelector(( {...data}:any) => data.restaurants);
  // const { loading, error, restaurants, init, possibleCities } = restaurantData
  const restaurantData = useSelector(( data:any) => data);
  useEffect(()=> console.log(restaurantData),[restaurantData])
  return (
    <Container>
      {/* {init ? (
        "Search for a restaurant using the fields above"
      ) : loading ? (
        "Searching..."
      ) : error ? (
        error.message
      ) : (
        <>
          {restaurants.length ? (
            <>
              <div>
                <p style={{ margin: 0 }}>Showing Results from:</p>
                {possibleCities.map((c:any) => (
                  <span key={c} className={classes.cityTag}>
                    {c}
                  </span>
                ))}
              </div>
            </>
          ): (
            `No results available`
          )}
        </>
      )} 
      {restaurants.map((r:any) => <ResultCard key={r.id} restaurant={r} />)} */}
    </Container>
  );
};

export default RestaurantsList;
