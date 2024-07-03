import "./App.css";
import { v4 as uuid } from "uuid";

import { useEffect, useState } from "react";
import axios from "axios";
import myContext from "./store/MyContext";
import Routers from "./store/Routers";
// import PlanetsDetails from './components/PlanetsDetails';

let baseUrl = "https://swapi.dev/api/";
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let imgBase1 = "https://starwars-visualguide.com/assets/img/planets";
let imgBase2 = "https://starwars-visualguide.com/assets/img/starships";

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]); 

  const addFavorite = (id ) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites,id]);
      
    }
    
  }
  const removeFavorite = (id) => {
    let newFavorites = favorites.filter((fav) => fav !== id);
    setFavorites(newFavorites);
  }
 

  useEffect(() => {
    async function getData() {
      try {
        let characters = await axios.get(`${baseUrl}people`);
        let planets = await axios.get(`${baseUrl}planets`);
        let starships = await axios.get(`${baseUrl}starships`);


      

        characters = characters.data.results.map((character, index) => {
          let img = `${imgBase}/${index + 1}.jpg`;
          let id = uuid();
          let type = "character"
          return { ...character, img, id , type};
        });

        planets = planets.data.results.map((planet, index) => {
          let img = `${imgBase1}/${index + 1}.jpg`;
          let id = uuid();
          let type = "planet"

          return { ...planet, img, id , type};
        });

        starships = starships.data.results.map((starship, index) => {
          let img = `${imgBase2}/${index + 1}.jpg`;
          let id = uuid();
          let type =  "starship"
          return { ...starship, img, id, type};
        });

        setCharacters(characters);
        setPlanets(planets);
        setStarships(starships);

      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  let context = { characters, planets,starships , setCharacters, setPlanets , setStarships , searchResults, setSearchResults, addFavorite, removeFavorite, favorites};

  return (
    <>
      <myContext.Provider value={context}>
        <Routers />
      </myContext.Provider>
    </>
  );
}

export default App;
