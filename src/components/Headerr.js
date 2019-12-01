import React from 'react';

class Headerr extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<>
			<h3>{this.props.scoreStatus}</h3>
			<h3>
			Your Score {this.props.score}  || Your Top Score {this.props.topScore}
			</h3>
			</>
    );
  }
}

export default Headerr;
