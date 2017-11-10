import React from 'react';
//import HelloWorld from './HelloWorld.jsx';
import HelloUser from './HelloUser.jsx';
import FruitContainer from './FruitContainer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
		<HelloUser username="Minka" />
		<FruitContainer />
      </div>
    );
  }
}





