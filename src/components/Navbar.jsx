import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import myContext from "../store/MyContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
  const { favorites, removeFavorite } = useContext(myContext);
  let navigate = useNavigate();

  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => navigate("/")} href="#">
          {" "}
             <img src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" width="100" height="50" alt="" />
        </a>

        <Searchbar />
       
        <Dropdown className="dropdown-front">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {favorites.length > 0 ? `Favorites (${favorites.length})` : "Favorites"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {favorites.map((favorite, index) => (
              <Dropdown.Item key={index} onClick={() => removeFavorite(favorite)}>
                {favorite.name ? favorite.name : favorite} <button className="btn btn-danger">X</button>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
