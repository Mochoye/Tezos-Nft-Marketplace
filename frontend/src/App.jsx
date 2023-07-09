
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Carousel from "./Components/carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="d-flex justify-content-around flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </>
  );
};

export default App;
