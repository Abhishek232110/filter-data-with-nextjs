import { HomeBody } from "./components/homeBody";

const HomePage = ({ getData }) => {
  return (
    <div>
      <HomeBody getData={getData} />
    </div>
  );
};

export default HomePage;
