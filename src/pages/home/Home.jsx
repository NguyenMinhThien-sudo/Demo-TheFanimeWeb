import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Narbar from "../../components/narbar/Narbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Narbar />
      <Featured />
      <List listName="Continue to Watch" />
      <List listName="Popular" />
      <List listName="Hot" />
      <List listName="Top" />
    </div>
  );
};

export default Home;
