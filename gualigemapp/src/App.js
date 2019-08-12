import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Form from './Form';
import Text from './TranslatedText';

import store from './reducer';

class App extends Component {
  render()
  {
    return(
      <div className="App">
        <Provider store={store}>
          <Form />
          <Text />
        </Provider>
      </div> 
    );
    
  }
}

export default App;
