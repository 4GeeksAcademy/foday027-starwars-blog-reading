import { useParams } from "react-router-dom";
import { useContext } from "react";
import myContext from "../store/MyContext";

const PeopleDetails = () => {
  const { uid } = useParams();
  const context = useContext(myContext);

  let character = context.characters.filter((el) => el.name === uid);
  let data = character[0];
  let img = data?.img;
  console.log(character[0]?.name);

  return (
    <div className="items">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="details">
        <h2>Name: {data?.name} </h2>
        <p>Height: {data?.height}</p>
        <p>Mass: {data?.mass}</p>
        <p>Hair color: {data?.hair_color}</p>
        <p>S kin color : {data?.skin_color}</p>
        <p>Eye color: {data?.eye_color}</p>
        <p>Birth year: {data?.birth_year}</p>

      </div>
    </div>
  );
};

export default PeopleDetails;
