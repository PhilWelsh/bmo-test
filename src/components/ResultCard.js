import { createUseStyles } from "react-jss";

const ResultCard = ({ restaurant }) => {
  return (
    <div key={restaurant.id}>
      <div>{restaurant.name}</div>
      <div>{restaurant.location}</div>
      <div>{restaurant.price_range}</div>
      <img
        src={
          restaurant.thumb
            ? restaurant.thumb
            : "https://www.payetteforward.com/wp-content/uploads/2018/12/My-iPhone-Cant-Find-My-Printer-Heres-The-Real-Fix.-828x466.jpg"
        }
      />
    </div>
  );
};

export default ResultCard;
