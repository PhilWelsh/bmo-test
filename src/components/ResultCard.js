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

//   const Star = ({ partial, full }) => {
//     return (
//       <svg>
//         <defs>
//           <linearGradient id={`star${value}`} x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stop-opacity="1" stop-color="yellow" />
//             <stop offset={`${partial}%`} stop-opacity="1" stop-color="yellow" />
//             <stop offset={`${partial}%`} stop-opacity="0" stop-color="yellow" />
//             <stop offset="100%" stop-opacity="0" stop-color="yellow" />
//           </linearGradient>
//         </defs>
//         <g id="icon-star">
//           <path
//             fill={partial ? `url(#star${value})` : full ? "yellow" : "white"}
//             d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
// l11.547-1.2L16.026,0.6L20.388,10.918z"
//           ></path>
//         </g>
//       </svg>
//     );
//   };
// <Star partial={partial} full={full} />
// const partial =
//   i < value && i + 1 > value ? Math.round((value - i) * 100) : null;

const Rating = ({ type, value }) => {
  const ratingRender = [...Array(5)].map((e, i) => {
    const full = i < Math.round(value);
    return (
      <span key={i} style={{ color: full && "yellow" }}>
        {type === "price" ? "$" : "★"}
      </span>
    );
  });
  return value > 0 ? (
    <div aria-label={`${type + " " + value}/5`}>{ratingRender}</div>
  ) : (
    <div aria-label={`no ${type} rating`}></div>
  );
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
          <Rating type="rating" value={restaurant.user_rating} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
