import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//iam storing state updates in an array , using subscribe
const history = [];

//action name constants
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmount = 'account/incrementByAmount';
const incBonus = 'bonus/increment';

//Store
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(thunk.default, logger.default)
);

//reducer is a function that helps in state update
//ye hamey naya state return karta hai
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    case incByAmount:
      if (action.payload >= 100) return { points: state.points + 5 };
    default:
      return state;
  }
}

function getUser(id) {
  //--------------[2]  the async function whichever is taking time , will have 2 parameters
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount)); //-------------[3] once we get data we are dispatching it
  };
}

function initUser(value) {
  return { type: init, payload: value };
}
function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

function incrementBonus(value) {
  return { type: incBonus };
}

setInterval(() => {
  //   store.dispatch({ type: 'increment' });
  //   store.dispatch({ type: 'decrement' });
  //   store.dispatch({ type: 'incrementByAmount', payload: 100 });

  // store.dispatch(incrementByAmount(300));

  // store.dispatch(getUser(2));

  store.dispatch(increment());
}, 2000);
