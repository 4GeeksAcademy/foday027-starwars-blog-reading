import { useContext } from 'react'
import myContext from '../store/MyContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



const StarshipsCard = () => {
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
            context.starships.map((starship) => {
                const isFavorite = context.favorites.includes(starship.id); 
                return (
                <div className="card" key={starship.name}>
                    <div>
                    <img src={starship.img} alt={starship.name}
                    onError={(e) => e.target.src = "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg"} />
                    </div>
                    <div className="item">
                    {starship.name}
    
                    <button className="btn"  onClick={() => toggleFavorite(starship.id ) }>
                    <FontAwesomeIcon className="icon" icon={faHeart} color={isFavorite ? 'red' : "grey"} />
                  </button>
                    </div>
                    <button className="btn2">
                        <Link to={`/starshipsdetails/${starship.name}`}>Details</Link>
                    
                    </button>
                </div>
                );
            })}
        </div>    
    </div>
  )
}

export default StarshipsCard