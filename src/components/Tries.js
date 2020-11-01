import React from "react";
import { useSelector } from "react-redux";

function Tries() {
  const tries = useSelector(state => state.tally.tries);
  return <h3 style={{ color: '#cc6d6d' }}>{`${tries} tries`}</h3>;
}

export default Tries;
