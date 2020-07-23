import React from 'react'
import About from './Component/About'
import Home from './Component/Home'
import Nav from './Component/Nav'
import Shop from './Component/Shop'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends React.Component{
  render(){
      return(
          <Router>
            <div className='App'>
                <Nav/>
                <Switch>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
          </Router>
      )
  }
}

export default App