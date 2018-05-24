import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1400
  },
  appBar: {
    position: 'absolute'
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    padding: '76px 0 16px 0',
    backgroundColor: '#ebebeb'
  },
  gridWrapper: {
  },
  toolContent: {
    height: 340,
    padding: '8px 8px'
  },
  sheetContent: {
    height: 340,
    padding: '8px 8px'
  },
  sheetCanvas: {
  }
})

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toolsExpanded: true,
      entitiesExpanded: true,
    };
  }
  
  toolsWidthShift = () => {
    this.setState({toolsExpanded: !this.state.toolsExpanded})
  }
  
  entitiesWidthShift = () => {
    this.setState({entitiesExpanded: !this.state.entitiesExpanded})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
          <AppBar className={classes.root}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.toolsWidthShift}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Immerseful
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={8} className={classes.gridWrapper}>
            {this.state.toolsExpanded ? 
            <Grid item xs={2}>
              <Paper className={classes.toolContent}>
              <IconButton onClick={this.toolsWidthShift}><ChevronRight/></IconButton>
                <Typography variant="title">Tools</Typography>
              </Paper>
            </Grid> : null }
            <Grid item xs className={classes.sheetCanvas}>
              <Paper className={classes.sheetContent}>
                <Typography variant="title">Sheet</Typography>
              </Paper>
            </Grid>
            {this.state.entitiesExpanded ? 
            <Grid item xs={2}>
              <Paper className={classes.toolContent}>
              <IconButton onClick={this.entitiesWidthShift}><ChevronRight/></IconButton>
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
