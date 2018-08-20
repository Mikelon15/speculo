import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from '../styles';


class RegistrationForm extends React.Component {
  render() {
    let { user, onChange, classes } = this.props;
    return (
      <div>
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              value={user.username}
              onChange={onChange}
              name="username"
              id="username"
              autoComplete="current-username"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input 
              value={user.email}
              onChange={onChange}
              id="email" 
              name="email" 
              autoComplete="email" 
              autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              value={user.password}
              onChange={onChange}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirm">Password</InputLabel>
            <Input
              value={user.confirm}
              onChange={onChange}
              name="confirm"
              type="password"
              id="confirm"
              autoComplete="current-password"
            />
          </FormControl>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(RegistrationForm);
