import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

import Nav from './Components/Nav'
import BottomNav from './Components/BottomNav'
import All from './Pages/All'
import Fav from './Pages/Fav'
import Routes from './Pages/Routes'


const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

class App extends React.Component {

  state = {
    screen: 'all'
  }

  handleChange = (event, value) => {
    this.setState({screen: value})
  }

  render() {
  
    return (
      <div className="App">
        <Nav/>
        {this.state.screen === 'all' ? <All/> : (null)}
        {this.state.screen === 'fav' ? <Fav/> : (null)}
        {this.state.screen === 'route' ? <Routes/> : (null)}
        <BottomNav screen={this.state.screen} handleChange={this.handleChange}/>
      </div>
    );
  }
  
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
