import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Homnics bloger");
  const [age, setAge] = useState(28);
  const handleClick = () => {
    // console.log("why did you click me lol")
  };
  // const name = "Agba john Doe"
  const handleClickAgain = (e) => {
    // console.log("why again " + name)
    setName("Desmond");
    setAge(30);
  };
  return (
    <div className="home1">
      <h2>
        {name} is {age} years old
      </h2>
      <p>
        This blogs carrys latest update in all aresa you need to know, the
        information, the latest information are updated and the older ones are
        deleted when due.
      </p>
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={() => handleClickAgain(" Bigger Benz")}> */}
        {/* Click Again */}
      {/* </button> */}
    </div>
  );
};

export default Home;
