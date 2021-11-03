import React, {useState } from 'react'
import openImg from "./download.jpg";
import flipImg from "./flip.jpg";


export default function Game() {
    const [isFlip, setisFlip] = useState(false)
    const [cards, setCards] = useState([
      {
        id: 1,
        openImage: { openImg },
        flipImage: { flipImg },
        isFlip: false,
      },
      {
        id: 2,
        openImage: "./download.jpg",
        flipImage: "./flip.jpg",
        isFlip: false,
      },
      {
        id: 3,
        openImage: "./download.jpg",
        flipImage: "./flip.jpg",
        isFlip: false,
      },
      {
        id: 4,
        openImage: "./download.jpg",
        flipImage: "./flip.jpg",
        isFlip: false,
      },
    ]);
    
    
    
    
    return (
      <div>
        {/* flip cards functions */}
        {cards.map((item, i) => {
          return (
            <div key={item.id} onClick={() => setCards(!isFlip)}>
              {isFlip ? item.openImage : item.flipImage}
            </div>
          );
        })}
      </div>
    );
}
