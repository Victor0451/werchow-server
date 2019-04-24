import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'






import Mainpage from '../pages/index';
import Maestro from '../pages/maestro';


class App extends Component {



  render() {

    return (
      <Router>
       
          <Route path="/" component={Mainpage} />
          <Route path="/maestro" component={Maestro} />
       
      </Router>




    );
  }
}

export default App;
