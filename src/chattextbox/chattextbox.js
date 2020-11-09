import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBoxComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      chatText: ''
    };
  }

  fncUserTyping = (e) => e.keyCode === 13 ? 
                    this.fncSubmitMessage() : 
                    this.setState({ chatText: e.target.value });

                    //validate space and empty space *
  messageValid = (txt) => txt && txt.replace(/\s/g, '').length;

  userClickedInput = () => {
      console.log('userClickedInput');
    };
  fncSubmitMessage = () => {
    if(this.messageValid(this.state.chatText)) {
        //send mesg to dashboard...
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById('chattextbox').value = ''; //clear input for the new mesgs
    }
  }

  render() {

    const { classes } = this.props;

    return(
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder='Type your message..' 
          onKeyUp={(e) => this.fncUserTyping(e)}
          id='chattextbox' 
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}>
        </TextField>
        <Send onClick={this.fncSubmitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }
}

export default withStyles(styles)(ChatTextBoxComponent);