import axios from "axios";

const getCities = (city) =>
  axios
    .get("https://developers.zomato.com/api/v2.1/cities", {
      headers: {
        "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
      },
      params: { q: city },
    })
    .then(({ data }) => {
      const cities = data.location_suggestions.filter((match) =>
        match.name.toLowerCase().includes(city.toLowerCase())
      );
      return cities.map((c) => c.name);
    });
export default getCities;
