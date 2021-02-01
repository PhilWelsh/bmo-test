import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../store/actions/getRestaurants";
import ResultCard from "./ResultCard";
import { createUseStyles } from "react-jss";

const Restaurants = () => {
  const dispatch = useDispatch();
  const restaurantsList = useSelector(({ restaurants }) => {
    console.log("state");
    console.log(restaurants);
    return restaurants;
  });
  const { loading, error, restaurants } = restaurantsList;
  useEffect(() => {
    dispatch(getRestaurants("Toronto, ON"));
  }, [dispatch]);
  return (
    <>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : restaurants.map((r) => <ResultCard restaurant={r} />)}
    </>
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
