import React from 'react';

class Photato extends React.Component {
	constructor(props){
		super(props);
		this.styling = {
			width:"100%"
		}
	}

  render() {
    return (
			<div className="col-6 col-sm-4 col-md-3 col-lg-3 my-2">
			<img src={this.props.src} style={this.styling} className="img-thumbnail img img-responsive full-width" alt={this.props.alt} id={this.props.id} onClick={this.props.clicky}/>
			</div>);
  }
}

export default Photato;
