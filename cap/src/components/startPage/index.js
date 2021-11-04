import React, { useState, useEffect } from "react";

import "./style.css";

const Cards = () => {
  //is it better to edit on the same array by using setCards or change on a copy?
  const [cardtry, setcardtry] = useState([]);
  const [Cards, setCards] = useState([
    {
      id: 1,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/53/b2/d6/53b2d6ccc3e2a9c789bcc867ab55cb6c.jpg",
    },
    {
      id: 2,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d5/4c/d1/d54cd1fef144248fdedfede82f2261b4.jpg",
    },
    {
      id: 3,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/10/8f/c0/108fc03650cd0c8347ec81c172acd105.jpg",
    },
    {
      id: 4,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9f/29/a1/9f29a1ae09a7f9a8c10afe9d297a23e8.jpg",
    },
    {
      id: 5,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/53/b2/d6/53b2d6ccc3e2a9c789bcc867ab55cb6c.jpg",
    },
    {
      id: 6,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d5/4c/d1/d54cd1fef144248fdedfede82f2261b4.jpg",
    },
    {
      id: 7,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/10/8f/c0/108fc03650cd0c8347ec81c172acd105.jpg",
    },
    {
      id: 8,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9f/29/a1/9f29a1ae09a7f9a8c10afe9d297a23e8.jpg",
    },
  ]);

}