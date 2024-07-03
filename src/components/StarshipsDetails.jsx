import { useParams } from "react-router-dom";
import { useContext } from "react";
import myContext from "../store/MyContext";

const StarshipsDetails = () => {
  const { uid } = useParams();
  const context = useContext(myContext);

  let starship = context.starships.filter((el) => el.name === uid);
  console.log(context.starships);
    let data = starship[0];
    console.log(data?.name);

 

  return (
    <div className="items" id="item1">
    <div>
        <img src={data?.img} alt={data?.name} />


    </div>
    <div className="details">

        <h1>{data?.name}</h1>
        <p>Model: {data?.model}</p>
        <p>Manufacturer: {data?.manufacturer}</p>
        <p>Cost in credits: {data?.cost_in_credits}</p>
        <p>Length: {data?.length}</p>
        <p>Max atmosphering speed: {data?.max_atmosphering_speed}</p>
        <p>Crew: {data?.crew}</p>
        <p>Passengers: {data?.passengers}</p>
        <p>Cargo capacity: {data?.cargo_capacity}</p>
        <p>Consumables: {data?.consumables}</p>
        <p>Hyperdrive rating: {data?.hyperdrive_rating}</p>
        <p>MGLT: {data?.MGLT}</p>
        <p>Starship class: {data?.starship_class}</p>

    </div>
    </div>
  );
};

export default StarshipsDetails;
