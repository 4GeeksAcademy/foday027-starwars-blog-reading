import React from "react";
import { Dropdown } from "react-bootstrap";
import myContext from "../store/MyContext";

import { useContext } from "react";

const Favourate = () => {
  
  const { favorites, removeFavorite } = useContext(myContext);
  return (
    <div >
      <Dropdown className="dropdown-front">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {favorites.length > 0 ? `Favorites (${favorites.length})` : "Favorites"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {favorites.map((favorite, index) => (
            <Dropdown.Item key={index.name} onClick={() => removeFavorite(favorite)}>
              {favorite?.name ? favorite?.name: favorite}
              <button className="btn btn-danger">X</button>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Favourate;
