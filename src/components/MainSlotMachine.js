import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToWins, addToTries, resetTally } from "../actions/tallyActions";
import Tries from "./Tries";
import Wins from "./Wins";

const Parent = styled.div`
  height: 100%;
  width: 100%;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SubDiv = styled.div`
  height: 50%;
  width: 40%;
  margin: 20px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #FFFFFF;
`;

const SubDivLower = styled(SubDiv)`
  height: auto;
`

const Header = styled.div`
  height: 60px;
  border-radius: 4px;
  width: 100%;
  background: #cc6d6d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: white;
`;

const Slots = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Slot = styled.div`
  height: 250px;
  width: 33.33%;
  max-width: 180px;
  border: 2px solid black;
`;

const Spin = styled.button`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  background: blue;
  border-radius: 4px;
  color: white;
  user-select: none;
  background-color: #cc6d6d;
  :hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border: none;
  }
`;

const Tally = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 20px;
`;

const baseColors = ["red", "blue", "yellow"];
const defaultColors = ["grey", "grey", "grey"];

const MainSlotMachine = () => {
  const dispatch = useDispatch();
  const tally = useSelector(state => state.tally);
  
  const [newColors, setColors] = useState(defaultColors);

  function spin() {
    const randomColors = [
      baseColors[Math.round(Math.random() * (baseColors.length - 1))],
      baseColors[Math.round(Math.random() * (baseColors.length - 1))],
      baseColors[Math.round(Math.random() * (baseColors.length - 1))]
    ];
    setColors(randomColors);
    dispatch(addToTries());
    if (randomColors[0] === randomColors[1] && randomColors[1]  === randomColors[2]) {
      dispatch(addToWins());
    }
  }

  useEffect(() => {
    if (tally.wins === 5) {
      const reset = window.confirm('Stop gambling!');
      if (reset) {
        dispatch(resetTally());
        setColors(defaultColors);
      }
    }
  }, [tally.wins, dispatch, setColors]);

  return (
    <Parent>
      <SubDiv>
        <Slots>
          <Slot style={{ backgroundColor: newColors[0] }} />
          <Slot style={{ backgroundColor: newColors[1] }} />
          <Slot style={{ backgroundColor: newColors[2] }} />
        </Slots>
        <Spin onClick={spin} disabled={tally.wins === 5}>Spin!</Spin>
      </SubDiv>
      <SubDivLower>
        <Header>Tally</Header>
        <Tally>
          <Tries />
          <Wins />
        </Tally>
      </SubDivLower>
    </Parent>
  );
};

export default MainSlotMachine;
