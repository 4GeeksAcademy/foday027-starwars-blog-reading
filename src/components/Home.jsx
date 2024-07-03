import PeopleCard from "./PeopleCard";
import PlanetsCard from "./PlanetsCard";
import StarshipsCard from "./StarshipsCard";
import SearchCard from "./SearchCard";
import { useContext } from "react";
import myContext from "../store/MyContext";
import Footer from "./Footer";

const Home = () => {
  const context = useContext(myContext);

  return (
    <div>
      {context.searchResults && context.searchResults.length > 0 ? (
        <SearchCard />
      ) : (
        <>
          <div className="overflow">
            <PeopleCard />
          </div>
          <div className="overflow">
            <PlanetsCard />
          </div>
          <div className="overflow">
            <StarshipsCard />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
