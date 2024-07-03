import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import myContext from "../store/MyContext";


const CharacterDetails = () => {
  const { name } = useParams();
  const { characters ,planets , starships } = useContext(myContext);
  const { searchResults } = useContext(myContext);
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    const character = searchResults.find((char) => char.name === name);
    setCharacterDetails(character);
  }, [name, searchResults]);

  if (!characterDetails) return <div>Loading...</div>;

 
 
   

  return (
    <div>
      <div>
        <img src={characterDetails.img} alt={characterDetails.name} />
      </div>
      <div>
       {characterDetails &&
        characterDetails.name === characters ? 
        <div>
          <h2>Name: {characterDetails.name} </h2>
          <p>Height: {characterDetails.height}</p>
          <p>Mass: {characterDetails.mass}</p>
          <p>Hair color: {characterDetails.hair_color}</p>
          <p>S kin color : {characterDetails.skin_color}</p>
          <p>Eye color: {characterDetails.eye_color}</p>
          <p>Birth year: {characterDetails.birth_year}</p>
        </div>
        : characterDetails.name === planets ?
        <div>
          <h2>Name: {characterDetails.name} </h2>
          <p>Rotation period: {characterDetails.rotation_period}</p>
          <p>Orbital period: {characterDetails.orbital_period}</p>
          <p>Diameter: {characterDetails.diameter}</p>
          <p>Climate: {characterDetails.climate}</p>
          <p>Gravity: {characterDetails.gravity}</p>
          <p>Population: {characterDetails.population}</p>
        </div>
        : characterDetails.name === starships ?
        <div>
          <h2>Name: {characterDetails.name} </h2>
          <p>Model: {characterDetails.model}</p>
          <p>Manufacturer: {characterDetails.manufacturer}</p>
          <p>Cost in credits: {characterDetails.cost_in_credits}</p>
          <p>Length: {characterDetails.length}</p>
          <p>Max atmosphering speed: {characterDetails.max_atmosphering_speed}</p>
          <p>Crew: {characterDetails.crew}</p>
          <p>Passengers: {characterDetails.passengers}</p>
          <p>Cargo capacity: {characterDetails.cargo_capacity}</p>
          <p>Consumables: {characterDetails.consumables}</p>
          <p>Hyperdrive rating: {characterDetails.hyperdrive_rating}</p>
          <p>MGLT: {characterDetails.MGLT}</p>
          <p>Starship class: {characterDetails.starship_class}</p>
        </div>
        : 'no data found'
        }
      </div>
    </div>

       
  );
};

export default CharacterDetails;
