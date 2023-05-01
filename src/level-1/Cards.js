import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  const [audio] = useState(new Audio("/music/squidMusic.mp3"));

  const playAudio = () => {
    audio
      .play()
      .then(() => console.log("Audio played successfully"))
      .catch((error) => console.error("Error playing audio:", error));
  };

  playAudio();

  const [items, setItems] = useState(
    [
      { id: 1, img: "/images/circle.png", stat: "" },
      { id: 1, img: "/images/circle.png", stat: "" },
      { id: 2, img: "/images/halfCircle.png", stat: "" },
      { id: 2, img: "/images/halfCircle.png", stat: "" },
      { id: 3, img: "/images/star.png", stat: "" },
      { id: 3, img: "/images/star.png", stat: "" },
      { id: 4, img: "/images/char11.png", stat: "" },
      { id: 4, img: "/images/char11.png", stat: "" },
      { id: 5, img: "/images/char2.png", stat: "" },
      { id: 5, img: "/images/char2.png", stat: "" },
      { id: 6, img: "/images/char3.png", stat: "" },
      { id: 6, img: "/images/char3.png", stat: "" },
      { id: 7, img: "/images/doll.png", stat: "" },
      { id: 7, img: "/images/doll.png", stat: "" },
      { id: 8, img: "/images/mask.png", stat: "" },
      { id: 8, img: "/images/mask.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      console.log(prev,current);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }


  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="abc">
    <h1>Level-1</h1>
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} /> 
      ))}
    </div>
    </div>
  );
}

export default Cards;
