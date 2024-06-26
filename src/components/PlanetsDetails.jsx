import  { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import myContext from './../store/MyContext';

const PlanetsDetails = () => {
    const {uid} = useParams
    const context = useContext(myContext)

    
    


  


  return (
   <div>
      {context &&
            context.planets.filter((planet) => planet.uid === uid).map((planet) => {
                console.log(planet.name)
              return (
                <div className='items' key={planet.name}>
                  <div className='picture'>
                    <img src={planet.img} alt={planet.name} />
                  </div>
                  <div className='details'>
                    <h3>Name : {planet.name}</h3>
                    <h3>Created : {planet.created}</h3>
                    <h3>Gravity : {planet.gravity}</h3>
                    <h3>Terrain : {planet.terrain}</h3>
                    <h3>Edited : {planet.edited}</h3>
                    <h3>Rotation : {planet.rotation_period}</h3>
                    <h3>Surface : {planet.surface_water}</h3>
                    <h3>Diameter : {planet.diameter}</h3>
                   
                  </div>
                </div>
              );
            })
         }


     
  
   </div>

    
  )
}

export default PlanetsDetails