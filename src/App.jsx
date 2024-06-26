
import "./App.css";


import { useEffect , useState } from "react";
import axios from "axios";
import myContext from './store/MyContext';
import Routers from "./store/Routers";
// import PlanetsDetails from './components/PlanetsDetails';

let baseUrl = "https://swapi.dev/api/";
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let imgBase1 = "https://starwars-visualguide.com/assets/img/planets"
// let imgBase2 = "https://starwars-visualguide.com/assets/img/starships"

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets , setPlanets] = useState([])
  
  useEffect(() => {
    async function getCharacters() {
      try {
        let response = await axios.get(`${baseUrl}people`);
        let data = response.data.results;
        let characters = data.map((character, index) => {
          let img = `${imgBase}/${index + 1}.jpg`;
          // let id = index + 1;
          return { ...character, img };
        });
        console.log(characters);
        setCharacters(characters);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getCharacters();
  

  }, []);

  useEffect(() => {
    
  
  async function getPlanets() {

    try {
      let response = await axios.get(`${baseUrl}planets`);
      let data = response.data.results
      let planets = data.map((planet , index) => {
        let img = `${imgBase1}/${index + 1}.jpg`;
        return {...planet, img}

      } )
      console.log(planets)
      setPlanets(planets)
      
    } catch (error) {
      console.log(error)
    }

  }
  getPlanets()
    
  },[] );


 



  let context = {characters, setCharacters , planets , setPlanets};

  return (
    <>
     <myContext.Provider value={context}>
    <Routers />
  </myContext.Provider>
    </>
  );
}

export default App;
