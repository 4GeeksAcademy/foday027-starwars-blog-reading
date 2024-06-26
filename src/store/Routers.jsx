import { Routes, Route } from 'react-router-dom';


import Home from '../components/Home';
import PeopleDetails from '../components/PeopleDetails';
import { Navbar } from '../components/Navbar';
import PlanetsDetails from '../components/PlanetsDetails';

const Routers = () => {
   
  return (
    
        <>



  <Navbar />    
<Routes>

      <Route path="/" element={<Home />} />
      <Route path="/peopledetails/:uid" element={<PeopleDetails />} />
      <Route path="/planet/:uid" element={<PlanetsDetails />} />
     
    </Routes>

        
      
    </>
  )
}

export default Routers