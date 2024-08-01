import { useContext } from "react";
import myContext from "../store/MyContext";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";



const PeopleCard = () => {
  const context = useContext(myContext);

  const toggleFavorite = (characterId) => {
    const isFavorite = context.favorites.includes(characterId);
    if (isFavorite) {
      context.removeFavorite(characterId);
    } else {
      context.addFavorite(characterId);
    }}
  
  return (
    <>
      <div className="container-fluid">
        {context &&
          context.characters.map((character) => {
            const isFavorite = context.favorites.includes(character.id); 
            return (
              <div className="card peopleCard bg-dark" key={character.name}>
                <div>
                  <img src={character.img} alt={character.name} />
                </div>
                <div className="item">
                  {character.name}

                  <button className="btn"  onClick={() => toggleFavorite(character.id ) }>
                    <FontAwesomeIcon className="icon" icon={faHeart} color={isFavorite ? 'red' : "grey"} />
                  </button>
                </div>
                <button className="btn2">
                  <Link to={`/peopledetails/${character.name}`  }>Details</Link>
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PeopleCard;
