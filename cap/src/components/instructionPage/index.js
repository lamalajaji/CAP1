import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default Instructions =()=> {
    return (
      <div className="instPage">
        <h1> WELCOME FRIENDS FANS </h1>
        <h1> HOW U DOIN? </h1>

        <div className="inner">
          <h2> This is a memory game to measure how much you love FREINDS </h2>

          <h2> how to play : </h2>
          <p> - Press start game to play.</p>
          <p>
            - Click the cards to see what card they uncover and try to find the
            matching card underneath the other cards.
          </p>
          <p>
            - Uncover two matching cards at once to hide them from the game.
          </p>
          <p>
            - There is a timer for each round, you have to choose the cards as
            much as you can before the time runs out.
          </p>

          <p>- The number of times you try "moves" will be counted.</p>
          <p>
            {" "}
            - The number of right moves will be counted too , So be carful when
            you choosing the matched cards.
          </p>

          <p className="bold">
            If you finish before the time is up you deservedly win , So the game
            will ask you to play next level press "OK" to go .
          </p>

          <h2> I'LL BE THERE FOR YOU ! </h2>
          <h3> Enjoy your Game </h3>



          <button>
            <Link to="/"> Back </Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="/Gamelevel/Easy"> let's Play </Link>{" "}
          </button>
        </div>
      </div>
    );
  }

