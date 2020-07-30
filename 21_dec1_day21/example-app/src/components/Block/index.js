
import React from '../../../node_modules/react'
import './block.css';

class Block extends React.Component {
  state = {
    numberOfClicks: 0
  }

  updateClickCount = () => {
    let currentNumOfClicks = this.state.numberOfClicks;
    const newNumOfClicks = currentNumOfClicks + 1;
    this.setState({numberOfClicks : newNumOfClicks});
    this.props.setLastClick(this.props.name);
  }
  render() {
    return (
      <div className="block" onClick={this.updateClickCount}>
        <p> I'm the {this.props.name} box</p>
        <p>I've been clicked on {this.state.numberOfClicks}</p>
        {this.props.lastClicked === this.props.name &&
          <p>I was clicked on last!</p>
        }
      </div>
    );
  }
  
}

export default Block;
