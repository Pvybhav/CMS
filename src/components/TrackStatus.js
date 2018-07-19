import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

import StepperForTracking from './StepperForTracking';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
});

class SimplePortal extends React.Component {
  container = null;
    state = {
        name: '',
        showTrackStatus: false,
    };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleshowTrackStatus = () =>{
    this.setState({showTrackStatus: true});
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Invoice No"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        /><br />
        <Button
          variant="contained"
          color="primary"
          className={classNames(classes.margin, classes.cssRoot)}
          onClick={this.handleshowTrackStatus}
        >
          Track Order
        </Button>
        </form>
        <div className={classes.container}>
          {this.state.showTrackStatus ? <StepperForTracking /> : ''}
          
        </div>
      </div>
    );
  }
}

SimplePortal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePortal);