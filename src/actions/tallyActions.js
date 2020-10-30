import { ADD_TO_WINS, ADD_TO_TRIES, RESET_TALLY } from "./types";

export const addToWins = () => dispatch => {
  dispatch({ type: ADD_TO_WINS, payload: null });
};

export const addToTries = () => dispatch => {
  dispatch({ type: ADD_TO_TRIES, payload: null })
}

export const resetTally = () => dispatch => {
  dispatch({ type: RESET_TALLY, payload: null })
}
