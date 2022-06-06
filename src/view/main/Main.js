import React, { Component } from 'react';
import './Main.css';
import citiField from '../../resources/images/citi-field.jpg';
import Commands from '../commands/Commands';
import StreamPage from '../stream/Stream';
import AboutMe from '../aboutme/AboutMe';
import NotFound from '../notfound/NotFound';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'black',
    borderBottom: '1px solid white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'url(' + citiField + ')'
  },
  dividerColor: {
    backgroundColor: 'white',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menuItemRoot: {
    '&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover': {
      backgroundColor: 'rgb(60,60,60)'
    }
  },
  menuItemSelected: {}
});

const options = [
  {
    text: 'About Me',
    icon: 'fi-nnsuxx-home',
    linkTo: '/'
  },
  {
    text: 'Commands',
    icon: 'fi-cnluxx-pen',
    linkTo: '/commands'
  },
  {
    text: 'Stream',
    icon: 'fi-nnsuxx-twitch-glitch',
    linkTo: '/stream'
  }
];


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  updateSelected(event, selectedIndex) {
    this.setState({ selected: selectedIndex });
  }

  render () {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar} >
          <Toolbar />
        </AppBar>
        <Router basename={process.env.PUBLIC_URL}>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
            anchor='left'
          >
            <span className='Main-name'>Mint Patty 17</span>
            <Divider className={classes.dividerColor}/>
            <List disablePadding={true}>
              {options.map((option, index) => (
                <MenuItem
                component={Link} 
                to={option.linkTo}
                classes={{
                  root: classes.menuItemRoot,
                  selected: classes.menuItemSelected
                }}
                selected={index === this.state.selected}
                onClick={event => this.updateSelected(event, index)}
                >
                  <ListItemIcon><i className={option.icon} style={{color: 'white'}}/></ListItemIcon>
                  <ListItemText className='Drawer-text'>{option.text}</ListItemText>
                </MenuItem>
              ))}
              </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path='/' component={AboutMe} />
              <Route path='/commands' component={Commands} />
              <Route path='/stream' component={StreamPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default withStyles(useStyles)(Main);
