import React from 'react';
import { Provider } from 'react-redux';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import store from './redux/store';
 

function App() {
  return (
    <Provider store={store}>
      <div style={{ marginTop: 30 }}>
        <HorizontalLinearStepper />
      </div>
    </Provider>
  );
}

export default App;
