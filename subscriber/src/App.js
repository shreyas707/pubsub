import React from 'react';
import redis from 'redis'

// importing only redis throws "Module not found: Can't resolve hiredis" error
// https://stackoverflow.com/questions/51018467/trying-to-access-redis-via-react-cant-resolve-hiredis

// doing npm install hiredis throws this error:
// https://github.com/redis/hiredis-node/issues/143

class App extends React.Component {
  constructor(props){
    super(props)

    const client = redis.createClient();
    client.subscribe("publisher1")

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
