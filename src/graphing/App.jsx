import React, { Component } from 'react';
import SVGContainer from './modules/SVGContainer';
import * as testData from './static/testData';

class App extends Component {

    render() {
        console.log('testData: ', testData);
        return (
          <div className="App">
              <h2>Test SVG components</h2>
              <SVGContainer width="500px" height="500px" content={testData.data.components} />
          </div>
        );
    }
}

export default App;
