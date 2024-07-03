import { useContext } from 'react';
import myContext from '../store/MyContext';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';





const SearchCard = () => {
  const { searchResults } = useContext(myContext);
  const context = useContext(myContext);

  const toggleFavorite = (characterId) => {
    const isFavorite = context.favorites.includes(characterId);
    if (isFavorite) {
      context.removeFavorite(characterId);
    } else {
      context.addFavorite(characterId);
    }
  };

  console.log(searchResults);
  return (
    <div>
      {searchResults.map((result, index) => {
        // Correct placement of isFavorite declaration
        let isFavorite = context.favorites.includes(result.id);
        return (
          <div className='card' key={index}>
            <img src={result.img} alt={result.name} />
            <div className="item">
              {result.name}
              <button className="btn" onClick={() => toggleFavorite(result.id)}>
                <FontAwesomeIcon className="icon" icon={faHeart} color={isFavorite ? 'red' : "grey"} />
              </button>
            </div>
            <button className='btn2'>
              {result.type === "character" ?
                <Link to={`/peopledetails/${result.name}`}>Details</Link> :
                result.type === "planet" ?
                  <Link to={`/planetsdetails/${result.name}`}>Details</Link> :
                  <Link to={`/starshipsdetails/${result.name}`}>Details</Link>   
              }
            </button>
          </div>
        );
      })}
    </div>
  );
};



export default SearchCard