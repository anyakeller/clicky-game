import React from 'react';
import Headerr from './components/Headerr.js';
import PhotatoDiv from './components/PhotatoDiv.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      scoreStatus: 'Click an image to begin'
    };
  }

  //updates score when potato clicked
  updateStatus = rightorwrong => {
    console.log('score updated');
    console.log(rightorwrong);

    if (rightorwrong) {
      let currentTop = this.state.topScore;
			let currentScore = this.state.score;
			currentScore++;
			if (currentScore > currentTop) currentTop++;
      this.setState({
				score:currentScore,
				topScore:currentTop,
				scoreStatus:"You guessed Correctly"
			});
    }
		else{
      this.setState({
				score:0,
				scoreStatus:"You done messed up.  Game Reset"
			});
		}
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron sticky-top shadow-lg py-2">
          <h1>Dont click the same image twice</h1>
          <Headerr
            scoreStatus={this.state.scoreStatus}
            score={this.state.score}
            topScore={this.state.topScore}
          />
        </div>
        <PhotatoDiv
          updateStatus={rightorwrong => this.updateStatus(rightorwrong)}
        />
      </div>
    );
  }
}

export default App;
