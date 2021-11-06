import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import "./style.css";
import Timer from "../Timer";

export default HardGame = () => {
  //is it better to edit on the same array by using setCards or change on a copy?
  const [cardtry, setcardtry] = useState([]);
  const [Moves, setMoves] = useState(0);
  let [rightMoves, setrightMoves] = useState(0);
  const [timerState, settimerState] = useState(true);
  const [Cards, setCards] = useState([
    {
      id: 1,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/ce/14/09/ce1409df01a7a907e4ed941b0bf7292f.jpg",
    },
    {
      id: 2,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d2/53/b5/d253b5b75a37854da7e7d81c4d5b8137.jpg",
    },
    {
      id: 3,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/b6/0d/b9/b60db9ec09c467b5224b4325d8d71b0a.jpg",
    },
    {
      id: 4,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/91/41/41/9141412d401450a7ae97f46779701fe9.jpg",
    },

    {
      id: 5,
      name: "e",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9b/51/e6/9b51e6507e4b684e0e494b3fb8317a4a.jpg",
    },
    {
      id: 6,
      name: "f",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/0e/c9/e8/0ec9e896335e0a3f3e5b94ec6032b091.jpg",
    },

    {
      id: 7,
      name: "j",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/8c/48/80/8c4880e67e73143b7aacf91e4baf3866.jpg",
    },
    {
      id: 8,
      name: "h",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/e7/6a/40/e76a405256deb66f711fe626f0d208e6.jpg",
    },

    {
      id: 9,
      name: "i",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/63/59/99/63599962e5699f36aaecb126d75788ae.jpg",
    },

    {
      id: 10,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/ce/14/09/ce1409df01a7a907e4ed941b0bf7292f.jpg",
    },
    {
      id: 11,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d2/53/b5/d253b5b75a37854da7e7d81c4d5b8137.jpg",
    },
    {
      id: 12,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/b6/0d/b9/b60db9ec09c467b5224b4325d8d71b0a.jpg",
    },
    {
      id: 13,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/91/41/41/9141412d401450a7ae97f46779701fe9.jpg",
    },

    {
      id: 14,
      name: "e",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9b/51/e6/9b51e6507e4b684e0e494b3fb8317a4a.jpg",
    },
    {
      id: 15,
      name: "f",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/0e/c9/e8/0ec9e896335e0a3f3e5b94ec6032b091.jpg",
    },

    {
      id: 16,
      name: "j",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/8c/48/80/8c4880e67e73143b7aacf91e4baf3866.jpg",
    },
    {
      id: 17,
      name: "h",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/e7/6a/40/e76a405256deb66f711fe626f0d208e6.jpg",
    },

    {
      id: 18,
      name: "i",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/63/59/99/63599962e5699f36aaecb126d75788ae.jpg",
    },
  ]);
  const [Firstchoice, setFirstchoice] = useState(null);
  const [Secondchoice, setSecondchoice] = useState(null);
  const [model, setModel] = useState(false);

  //background imge
  const backimge =
    "https://i.pinimg.com/564x/29/14/18/29141838a9191ba491f737fa5e1ae9e5.jpg";

  //pair of each card - to save the same id and not repeat the imges url
  const pairCards = [...Cards];

  // shuuffle Cards function
  function shuuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // to shuuffle Cards just on the begin
  useEffect(() => {
    setcardtry(shuuffleCards(pairCards));
  }, []);

  //tryyyy

  // flip Cards on click function -- still
  const flipCard = (id) => {
    console.log("gg");
  };

  let count = 0;

  const showResult = () => {
    console.log(rightMoves);
    if (rightMoves === 8) {
      let score = Moves / rightMoves;
      if (score > 3) {
        //2
        alert("Bad score ): let's try again! ");
        refreshPage();
      } else {
        setModel(true);
        settimerState(false);
      }
    }
  };

  const handleClick = (item, i) => {
    // console.log(item);
    if (Firstchoice === null) {
      setFirstchoice(item);
      setcardtry(
        cardtry.map((ele) => {
          if (ele.id === item.id) {
            return { ...ele, isflip: true };
          } else {
            return ele;
          }
        })
      );

      count++;
    } else {
      setMoves(Moves + 1);
      console.log(Moves);
      if (item.name === Firstchoice.name) {
        console.log("same");
        setrightMoves(rightMoves + 1);

        showResult();

        setcardtry(
          cardtry.map((ele) => {
            if (ele.name === Firstchoice.name) {
              return { ...ele, ismatch: true, isflip: true };
            } else {
              return ele;
            }
          })
        );

        console.log(cardtry);
        count = 0;
        setFirstchoice(null);
      } else {
        setcardtry(
          cardtry.map((ele) => {
            if (ele.id === item.id) {
              return { ...ele, isflip: true };
            } else {
              return ele;
            }
          })
        );
        setTimeout(() => {
          setcardtry(
            cardtry.map((ele) => {
              if (ele.id === item.id || ele.id === Firstchoice.id) {
                return { ...ele, isflip: false };
              } else {
                return ele;
              }
            })
          );
        }, 900);

        console.log("diff");
        count = 0;
        setFirstchoice(null);
      }
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="relDiv3">
        <section>
          <p className="gameChoice3"> Moves: {Moves} </p>
          <p className="gameChoice3">Right Moves: {rightMoves}</p>
          <button id="btn3" className="restartBtn3" onClick={refreshPage}>
            {" "}
            Restart Game{" "}
          </button>{" "}
        </section>

        <div className="allCards3">
          {cardtry.map((item, i) => {
            if (item.isflip) {
              return (
                <div className="cardDiv3">
                  {" "}
                  <img className="front3" src={item.img} />{" "}
                </div>
              );
            } else {
              return (
                <div className="cardDiv3">
                  {" "}
                  <img
                    className="back3"
                    onClick={() => handleClick(item, i)}
                    src={backimge}
                  />{" "}
                </div>
              );
            }
          })}
          {console.log(cardtry)}
        </div>

        {/* <Timer time={90} go={timerState}  /> */}

        {
          model ? (
            <div className="model">
              {" "}
              Great score , let's go to the next level{" "}
              <button className="letsBtn">
                {" "}
                <Link to="/Gamelevel/Medium"> let's go </Link>{" "}
              </button>{" "}
            </div>
          ) : null //absulote
        }
      </div>
    </>
  );
};
