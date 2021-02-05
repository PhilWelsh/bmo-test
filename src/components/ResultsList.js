import React from "react";
import { useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import { createUseStyles } from "react-jss";

import Container from "./Container";

const Restaurants = () => {
  const restaurantData = useSelector(({ restaurants }) => {
    return restaurants;
  });
  const cities = useSelector(({ possibleCities }) => {
    console.log(possibleCities);
    return possibleCities;
  });
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
          Showing results for {console.log(cities)}
          {restaurants.map((r) => (
            <ResultCard key={r.id} restaurant={r} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Restaurants;
// const ResultsList = () => {
//   // const useStyles = createUseStyles({
//   //   SearchBar: {
//   //     color: "red",
//   //   },
//   // });
//   // const classes = useStyles();
//   return (
//     <div>
//       {/* {results.map((result) => {
//         return <Result result={result} onDelete={onDelete} key={result.id} />;
//       })} */}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     results: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => {
//       dispatch(deleteResult(id));
//     },
//   };
// };

// export default ResultsList(mapStateToProps, mapDispatchToProps)(ResultsList);
