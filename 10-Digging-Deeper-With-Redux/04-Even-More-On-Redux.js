const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  } else if (action.type === 'add_character') {
  	return [ ...state, action.payload];
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { type: 'split_string', payload: 'Hello' };

store.dispatch(action);
store.getState();

const actionAdd = { type: 'add_character', payload: '!' };

store.dispatch(actionAdd);
store.getState();
