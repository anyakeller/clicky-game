import React from 'react';
import Photato from './components/Photato.js';
import Photatoes from './photatoes.json';
import Headerr from './components/Headerr.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //give each photato an id
    Photatoes.forEach((element, index) => {
      Photatoes[index].id = index;
      Photatoes[index].src = '/potatoes/' + element.name + '.jpg';
      Photatoes[index].key = index;
    });
    //set the state
    this.state = {
      photatoes: Photatoes
    };
  }

	//thanks stack overflow for the shuffle function
  shufflearr = array => {
		for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
		return array;
	};
  // function to map images to photoato element
  populateImages = erhmages => {
    let shuffled = this.shufflearr(this.state.photatoes);
    let Elements = shuffled.map(photato => {
      return (
        <Photato
          src={photato.src}
          alt={photato.alt}
          key={photato.key}
          id={photato.id}
        />
      );
    });
    return Elements;
  };

  render() {
    console.log(this.state.photatoes);
    return (
      <div className="App">
        <div className="jumbotron sticky-top shadow-lg">
          <h1>Dont click the same image twice</h1>
          <Headerr />
        </div>
        <div className="row">{this.populateImages(this.state.photatoes)}</div>
      </div>
    );
  }
}

export default App;
