import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DirectionsIcon from '@material-ui/icons/Directions'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
}

class BottomNav extends React.Component {
  

  render() {
    const { classes } = this.props

    return (
      <BottomNavigation value={this.props.screen} onChange={this.props.handleChange} className={classes.root} showLabels>
        <BottomNavigationAction label="Favorites" value="fav" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="All" value="all" icon={<DirectionsBusIcon />} />
        <BottomNavigationAction label="Routes" value="route" icon={<DirectionsIcon/>} />
      </BottomNavigation>
    )
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BottomNav)