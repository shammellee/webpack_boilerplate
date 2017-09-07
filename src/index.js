import React from 'react';
import {render} from 'react-dom';

import MyComponent from './app/MyComponent';

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <h1 className='header'>React is ready!</h1>
        <MyComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

