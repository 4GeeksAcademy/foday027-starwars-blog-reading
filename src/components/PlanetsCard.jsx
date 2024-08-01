import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../store/MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



const PlanetsCard = () => {
    const context = useContext(myContext);
    const toggleFavorite = (characterId) => {
      const isFavorite = context.favorites.includes(characterId);
      if (isFavorite) {
        context.removeFavorite(characterId);
      } else {
        context.addFavorite(characterId);
      }}
  return (
    <div>
          <div className="container-fluid">
        {context &&
          context.planets.map((planet) => {
            const isFavorite = context.favorites.includes(planet.id); 
            return (
              <div className="card bg-dark" key={planet.name}>
                <div>
                  <img src={planet.img} alt={planet.name} 
                    onError={(e) => e.target.src = "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg"}
                  />
                </div>
                <div className="item">
                  {planet.name}

                  <button className="btn"  onClick={() => toggleFavorite(planet.id ) }>
                    <FontAwesomeIcon className="icon" icon={faHeart} color={isFavorite ? 'red' : "grey"} />
                  </button>
                </div>
                  <button className="btn2">
                    <Link to={`/planetsdetails/${planet.name}`}>Details</Link>
                    
                 
                  </button>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default PlanetsCard