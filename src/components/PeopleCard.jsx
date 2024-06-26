import { useContext } from "react";
import myContext from "../store/MyContext";
import { Link } from "react-router-dom";
import "../App.css";

const PeopleCard = () => {
  const context = useContext(myContext);
  return (
    <>
      <div className="container-fluid">
        {context &&
          context.characters.map((character) => {
            return (
              <div className="card" key={character.name}>
                <div>
                  <img src={character.img} alt={character.name} />
                </div>
                <div className="item">
                  {character.name}

                  <button className="btn btn-primary">
                    <Link to={`/peopledetails/${character.name}`}>Details</Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      <div className="container-fluid">
        {context &&
          context.planets.map((planet) => {
            return (
              <div className="card" key={planet.name}>
                <div>
                  <img src={planet.img} alt={planet.name} />
                </div>
                <div className="item">
                  {planet.name}

                  <button className="btn btn-primary">
                    <Link to={`/planet/${planet.name}`}>Details</Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PeopleCard;
