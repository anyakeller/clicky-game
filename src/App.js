import React from 'react';
import Headerr from './components/Headerr.js';
import PhotatoDiv from './components/PhotatoDiv.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <div className="jumbotron sticky-top shadow-lg">
          <h1>Dont click the same image twice</h1>
          <Headerr />
        </div>
			<PhotatoDiv/>
      </div>
    );
  }
}

export default App;
