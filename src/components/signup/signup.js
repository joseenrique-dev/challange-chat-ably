import  React from "react";
import styles from './styles';
// # From Materials #
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import initAbly from '../../services/ably.services';
class SignupComponent extends React.Component {

  constructor() {
    super();
    
    this.state = {
          user: null
        };
      }
    userTyping = (event) => {
      this.setState({ user: event.target.value });
    }
    submitSignup = (event) => {
      event.preventDefault();
      debugger
      console.log('SIGN UP')
      initAbly(this.state.user);
      this.props.history.push(`/user/?name=${this.state.user}`);
    };

    render(){
        const { classes } = this.props;
        
        return (
          <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                Register in Aby Chat
              </Typography>
              <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='signup-email-input' >Enter Your User</InputLabel>
                  <Input autoComplete='email' autoFocus id='signup-email-input' onChange={(e) => this.userTyping( e)}></Input>
                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
              </form>
            </Paper>
          </main>
        )
    }

  

}

export default withStyles(styles)(SignupComponent);