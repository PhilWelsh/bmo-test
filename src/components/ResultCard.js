import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  ResultCard: {
    display: "flex",
    width: "100%",
    borderRadius: 10,
    border: "2px solid white",
    marginTop: 10,
    padding: 10,
    boxSizing: "border-box",
  },
  ResultInfo: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: 10,
    "& h1": { fontSize: "1.5rem" },
    "& p": { fontSize: "1rem" },
    "& h1, p": { marginTop: 0 },
  },
  ResultImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 200,
  },
  RatingsSection: {
    display: "flex",
  },
});

const Rating = ({ type, value }) => {
  return <>{value}</>;
};

const ResultCard = ({ restaurant }) => {
  const classes = useStyles();
  return (
    <div className={classes.ResultCard} key={restaurant.id}>
      <a className={classes.ResultImageContainer} href={restaurant.url}>
        <img
          style={{
            width: "inherit",
          }}
          src={
            restaurant.thumb
              ? restaurant.thumb
              : "https://static.thenounproject.com/png/140281-200.png"
          }
        />
      </a>
      <div className={classes.ResultInfo}>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.cuisines}</p>
        <p>{restaurant.location}</p>
        <p>{restaurant.city}</p>
        <div className={classes.RatingsSection}>
          <Rating type="price" value={restaurant.price_range} />
          <div>{restaurant.price_range}</div>
          <div>{restaurant.user_rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
