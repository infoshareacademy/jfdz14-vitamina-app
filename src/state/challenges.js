import { DATABASE_URL } from '../index';

// INITIAL STATE
const initialState = {
  data: [],
}

//ACTIONS
const SET_CHALLENGES = 'SET_CHALLENGES'

//REDUCER
export const challenges = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHALLENGES:
      return {
        data: action.payload,
      }
    default:
      return state;
  }
}

//ACTION CREATORS
export const setChanllenges = (challenges) => ({type: SET_CHALLENGES, payload: challenges});

export const fetchChallenges = () => {
  return (dispatch) => {
    fetch(`${DATABASE_URL}/challenges.json`)
      .then(resp => resp.json())
      .then(data => {
        const formattedData = data
        ? Object.keys(data)
            .map(key => ({...data[key]}))
        : []

        dispatch(setChanllenges(formattedData))
      })
  }
}
