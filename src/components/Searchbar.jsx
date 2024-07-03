
import { useContext } from "react";
import myContext from "../store/MyContext";
import { useState } from "react";


const Searchbar = () => {
  
    const context = useContext(myContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    let data = e.target.value;
    setSearch(data);

    const filtered = [...context.characters, ...context.starships, ...context.planets].filter((el) => el.name.toLowerCase().includes(data.toLowerCase()));
    context.setSearchResults(filtered);
    console.log(filtered);
    if (data === "") {
      context.setSearchResults([]);
    }
  };

  return (
    <div>
      <input onChange={
        handleSearch
      } value={search} type="text" placeholder="Search..." />
         
       
   
    </div>


  );
};

export default Searchbar;
