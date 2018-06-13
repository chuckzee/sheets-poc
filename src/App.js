import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Build from '@material-ui/icons/Build';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Accessibility from '@material-ui/icons/Accessibility';
import Input from '@material-ui/core/Input';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SheetGrid from './components/SheetGrid/SheetGrid'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './App.styles';
 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toolsExpanded: false,
      entitiesExpanded: false,
    };
  }
  
  toolsWidthShift = () => {
    this.setState({toolsExpanded: !this.state.toolsExpanded})
  }
  
  entitiesWidthShift = () => {
    this.setState({entitiesExpanded: !this.state.entitiesExpanded})
  }

  editorButton = () => {
    this.setState()
  }

  toggleEditor = () => {
    this.toolsWidthShift()
    this.entitiesWidthShift()
  }

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.appFrame}>
          <AppBar className={classes.root}>
            <Toolbar>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                <Accessibility /> Turnuroth
              </Typography>
              <Input className={classes.searchBar} />
              <IconButton color="inherit">
                <Build onClick={this.toggleEditor} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid container className={classes.gridWrapper}>
            {this.state.toolsExpanded ? 
            <Grid item xs={2}>
              <Paper className={classes.toolContent}>
                <Typography>Example 1</Typography>
                <Typography>Example 2</Typography>
              </Paper>
            </Grid> : null }
            <Grid item xs className={classes.sheetCanvas}>
              <Paper className={classes.sheetContent}>
                <SheetGrid />
              </Paper>
            </Grid>
            {this.state.entitiesExpanded ? 
            <Grid item xs={2}>
              <Paper className={classes.toolContent}>
                <Typography variant="title">Entities</Typography>
              </Paper>
            </Grid> : null }
          </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
