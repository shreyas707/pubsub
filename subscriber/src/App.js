import React from 'react';
import redis from 'redis'

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      msg: ""
    }
  }
  
  render() {
    return (
      <div>
        <h2>Subscriber</h2>
      </div>
    )
  }
}

export default App;
