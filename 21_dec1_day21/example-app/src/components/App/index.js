import React from '../../../node_modules/react'
import Block from '../Block'
import './app.css';

class App extends React.Component {
  state = {
    lastClicked: null,
  }

  setLastClicked = name => {
    this.setState({
      lastClicked: name
    })

  }
  render() {
    return (
      <div className="app">
        <Block name="First" lastClicked={this.state.lastClicked} setLastClick={this.setLastClicked} />
        <Block name="Second" lastClicked={this.state.lastClicked} setLastClick={this.setLastClicked} />
        <Block name="Third" lastClicked={this.state.lastClicked} setLastClick={this.setLastClicked} />
        <Block name="Fourth" lastClicked={this.state.lastClicked} setLastClick={this.setLastClicked} />
      </div>
    );
  }
  
}

export default App;
