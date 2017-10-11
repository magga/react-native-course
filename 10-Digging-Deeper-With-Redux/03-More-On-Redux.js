const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
  	return action.payload.split('');
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { type: 'split_string', payload: 'Hello' };

store.dispatch(action);

store.getState();
