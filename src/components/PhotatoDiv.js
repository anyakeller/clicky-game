import React from 'react';
import Photato from './Photato.js';
import Photatoes from './../photatoes.json';

class PhotatoDiv extends React.Component {
  constructor(props) {
    super(props);
    let photatoesClicked = Photatoes.map(photato => false);

    //give each photato an id
    Photatoes.forEach((element, index) => {
      Photatoes[index].id = index;
      Photatoes[index].src = '/potatoes/' + element.name + '.jpg';
      Photatoes[index].key = index;
    });
    //set the state
    this.state = {
      photatoes: Photatoes,
      photatoesClicked: photatoesClicked
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

	// helper to update score
	updateScore = (pid) =>{
		if (this.state.photatoesClicked[pid]) {
    let photatoesClicked = Photatoes.map(photato => false);
			this.setState({
				photatoesClicked:photatoesClicked
			})
			this.props.updateStatus(false);
		}
		else {
			let currentClicked = this.state.photatoesClicked;
			currentClicked[pid] = true;
			this.setState({
				photatoesClicked:currentClicked
			})
			this.props.updateStatus(true);
		}
	}

	//handle clicked photato
  photatoClicked = (e, pid) => {
    console.log(pid);
		this.updateScore(pid);
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
          clicky={e => this.photatoClicked(e, photato.id)}
        />
      );
    });
    return Elements;
  };

  render() {
    return (
      <div className="row">{this.populateImages(this.state.photatoes)}</div>
    );
  }
}

export default PhotatoDiv;
