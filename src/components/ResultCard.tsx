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
//           <linearGradient id={`star${value}`} x1='0%' y1='0%' x2='100%' y2='0%'>
//             <stop offset='0%' stop-opacity='1' stop-color='yellow' />
//             <stop offset={`${partial}%`} stop-opacity='1' stop-color='yellow' />
//             <stop offset={`${partial}%`} stop-opacity='0' stop-color='yellow' />
//             <stop offset='100%' stop-opacity='0' stop-color='yellow' />
//           </linearGradient>
//         </defs>
//         <g id='icon-star'>
//           <path
//             fill={partial ? `url(#star${value})` : full ? 'yellow' : 'white'}
//             d='M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
// l11.547-1.2L16.026,0.6L20.388,10.918z'
//           ></path>
//         </g>
//       </svg>
//     );
//   };
// <Star partial={partial} full={full} />
// const partial =
//   i < value && i + 1 > value ? Math.round((value - i) * 100) : null;

type RatingProps = {
  type:string,
  value:number
}

const Rating = ({ type, value }:RatingProps) => {
  const ratingRender = [...Array(5)].map((e, i) => {
    
    const valueColor:string = i < Math.round(value) ? "yellow" : "initial"
    return (
      <span key={e} style={{ color: valueColor }}>
        {type === "price" ? "$" : "★"}
      </span>
    );
  });
  return value > 0 ? (
    <div aria-label={`${type}: ${value}/5`}>{ratingRender}</div>
  ) : (
    <div aria-label={`no ${type} rating`} />
  );
};

type Restaurant={restaurant:{
  id:number,
  name:string,
  cuisines:string,
  priceRange:number,
  userRating:number,
  thumb:string,
  location:string,
  city:string,
  url:string
}}
const ResultCard = ({ restaurant}:Restaurant ) => {
  const {
      id,
      name,
      cuisines,
      priceRange,
      userRating,
      thumb,
      location,
      city,
      url
  }= restaurant
  const classes = useStyles();
  return (
    <div className={classes.ResultCard} key={id}>
      <a className={classes.ResultImageContainer} href={url}>
        <img
          style={{
            width: "inherit",
          }}
          src={thumb || "https://static.thenounproject.com/png/140281-200.png"}
          alt={name}
        />
      </a>
      <div className={classes.ResultInfo}>
        <h1>{name}</h1>
        <p>{cuisines}</p>
        <p>{location}</p>
        <p>{city}</p>
        <div className={classes.RatingsSection}>
          <Rating type="price" value={priceRange} />
          <Rating type="rating" value={userRating} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
