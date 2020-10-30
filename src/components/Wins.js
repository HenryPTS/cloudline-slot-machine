import React from "react";
import { useSelector } from "react-redux";

function Wins() {
  const wins = useSelector(state => state.tally.wins);
  return <h3 style={{ color: '#fff6f8' }}>{`${wins} wins`}</h3>;
}

export default Wins;
