import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {

  

  render() {

    const { classes, chat, user } = this.props;
    console.log("VALUE 100000001-->", { classes, chat, user })
    if( chat === undefined ){
        return(<main className={classes.content}> vacio </main>)
    }else{
        return (<div>
            <div></div>
            <main className={classes.content}>
                {
                    chat.messages.map((msg, index)=>{
                        console.log("MSGGG", msg)
                        return (
                            <div 
                                key={index} 
                                className={msg.sender === this.props.user ? classes.userSent : classes.friendSent}
                            >
                            { msg.message }
                            </div>
                        )
                    })
                }
            </main>
        </div>)
    }
  }
}

export default withStyles(styles)(ChatViewComponent);