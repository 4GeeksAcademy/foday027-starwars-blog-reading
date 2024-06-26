import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import myContext from '../store/MyContext'


const PeopleDetails = () => {
    const { uid } = useParams();
    const context = useContext(myContext);

   


   
  return (
    <div className='container-fluid details'>
        {context &&
            context.characters.map((character) => {
            if (character.name === uid) {
                return (
                <div className='items' key={character.name}>
                   <div className='picture'>
                     <img src={character.img} alt={character.name} />
                   </div>
                   <div className='details'>

                    <h2>Name : {character.name}</h2>
                    <h2>Height : {character.height}</h2>
                    <h2>Mass :{character.mass}</h2>
                    <h2>Hair Color : {character.hair_color}</h2>
                    <h2>Skin : {character.skin_color}</h2>
                    <h2>Eyes Color :{character.eye_color}</h2>
                    <h2>Birth : {character.birth_year}</h2> </div>
                   </div>
                );
            }
            }
            )}
    </div>
  )
}

export default PeopleDetails