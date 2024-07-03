import { Routes, Route } from 'react-router-dom';
import CharacterDetails from '../components/CharacterDetails';


import Home from '../components/Home';
import PeopleDetails from '../components/PeopleDetails';
import { Navbar } from '../components/Navbar';
import PlanetsDetails from '../components/PlanetsDetails';
import StarshipsDetails from '../components/StarshipsDetails';
// import SearchCard from '../components/SearchCard';

const Routers = () => {
   
  return (
    
        <>



  <Navbar />    
<Routes>

      <Route path="/" element={<Home />} />
      <Route path="/peopledetails/:uid" element={<PeopleDetails />} />
      <Route path="/planetsdetails/:uid" element={<PlanetsDetails />} />
      <Route path="/starshipsdetails/:uid" element={<StarshipsDetails />} />
      {/* <Route path="/search/:uid" element={<SearchCard />} /> */}
      
      <Route path="/details/:name/:type" element={<CharacterDetails />} />

     
    </Routes>

        
      
    </>
  )
}

export default Routers