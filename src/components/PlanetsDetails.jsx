import { useParams } from "react-router-dom";
import { useContext } from "react";
import myContext from "../store/MyContext";

function PlanetsDetails() {
  const { uid } = useParams();
  const context = useContext(myContext);

  let planet = context.planets.filter((el) => el.name === uid);
  let data = planet[0];
  let img = data?.img;
  console.log(data?.name);

  return (
    <div className="items">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h1>Name: {data?.name} </h1>

        <p>Rotation period: {data?.rotation_period}</p>
        <p>Orbital period: {data?.orbital_period}</p>
        <p>Diameter: {data?.diameter}</p>
        <p>Climate: {data?.climate}</p>
        <p>Gravity: {data?.gravity}</p>
        <p>Terrain: {data?.terrain}</p>
        <p>Surface water: {data?.surface_water}</p>
        <p>Population: {data?.population}</p>
      </div>
    </div>
  );
}

export default PlanetsDetails;
