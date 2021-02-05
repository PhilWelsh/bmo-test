import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Provider } from "react-redux";
import store from "./store/store";
import ResultsList from "./components/ResultsList";

// CREATE INPUT THAT FILTERS CITIES BASED ON CURRENT INPUT PARTIAL MATCH, DISPLAY UNDERNEATH.
// OR ASSUME CLOSEST MATCH AND POPULATE CONTENT

// ON MATCHING/SELECTING CITY NAME, POPULATE UNDERNEATH COMPONENT WITH MATCHING NAME

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
          <ResultsList />
        </header>
      </div>
    </Provider>
  );
}

export default App;

// const CityOptions = () => {
//   return (
//     <>
//       {cities.map((city) => (
//         <option key={city.id}>{city.name}</option>
//       ))}
//     </>
//   );
// };
//TSX
// import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'
// import SearchBar from './components/SearchBar';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// // CREATE INPUT THAT FILTERS CITIES BASED ON CURRENT INPUT PARTIAL MATCH, DISPLAY UNDERNEATH.
// // OR ASSUME CLOSEST MATCH AND POPULATE CONTENT

// const store = createStore(rootReducer);

// // ON MATCHING/SELECTING CITY NAME, POPULATE UNDERNEATH COMPONENT WITH MATCHING NAME

// const fetchData = ()=>{
//   return axios.get("https://jsonplaceholder.typicode.com/comments")
//   .then((res:any)=> {
//     const filtered = res.data.filter((r:any) =>r.postId===3)
//     const newObjectArray = filtered.map((f:any)=> {
//       return({
//         id:f.postId,
//         newName:f.name
//       })
//     })
//     console.log(newObjectArray)
//     // return()
//   })
// }

// function App() {

//   useEffect(()=>{
//   fetchData()
//       // res.data.map((r:any)=>{
//       //       id:r.id,
//       //       name:r.name,
//       //       area:r.postId.toString(),
//       //       price:r.email
//       //   })

//     // .catch(err=>{console.log(err.status)})
// },[]
//   )
//   interface IexampleCity {
//     id:number,
//     name:string,
//     area:string,
//     price:string
//   }
//   const exampleCity = {
//     id:23,
//     name:"",
//     address:"",
//     area:"",
//     price:0,
//   }
//   const [cities, setCities] = useState<IexampleCity[]>([])

//   const dataRestaurants: object ={
//     "restaurants": [ {
//       "id": 107257,
//       "name": "Las Tablas Colombian Steak House",
//       "address": "2942 N Lincoln Ave",
//       "city": "Chicago",
//       "state": "IL",
//       "area": "Chicago / Illinois",
//       "postal_code": "60657",
//       "country": "US",
//       "phone": "7738712414",
//       "lat": 41.935137,
//       "lng": -87.662815,
//       "price": 2,
//       "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
//       "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
//       "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
//     },
//     {
//       "id": 107258,
//       "name": "Las Tablas Colombian Steak House",
//       "address": "2942 N Lincoln Ave",
//       "city": "Chicago",
//       "state": "IL",
//       "area": "Chicago / Illinois",
//       "postal_code": "60657",
//       "country": "US",
//       "phone": "7738712414",
//       "lat": 41.935137,
//       "lng": -87.662815,
//       "price": 1,
//       "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
//       "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
//       "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
//     },
//     {
//       "id": 107259,
//       "name": "Las Tablas Colombian Steak House",
//       "address": "2942 N Lincoln Ave",
//       "city": "Detroit",
//       "state": "DE",
//       "area": "Detroit / Illinois",
//       "postal_code": "60657",
//       "country": "US",
//       "phone": "7738712414",
//       "lat": 41.935137,
//       "lng": -87.662815,
//       "price": 5,
//       "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
//       "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
//       "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
//     }
//    ]

//   }

//   const CityOptions = ()=> {return(<>{cities.map(city=> <option key={city.id}>{city.name}</option>)}</>)}
//   // const data = (object:object)=>{
//   //   return
//   // }
//   // TODO fix typeset

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <SearchBar placeholder="yes" label="Looking for food in..." />
//         <input type="text" name="city" list="cityname" />
//           <datalist id="cityname">
//             <CityOptions/>
//           </datalist>
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <button onClick={handleFetchData}>CLICK</button> */}
//       </header>
//     </div>
//   );
// }

// export default App;
