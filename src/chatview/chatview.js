import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {

  componentDidUpdate = () =>{
    const container = document.getElementById('chatview-container');
    if ( container ){
        container.scrollTo( 0, container.scrollHeight )
    }
  }

  render() {

    const { classes, chat, user } = this.props;
    if( chat === undefined ){
        return(<main className={classes.content}> vacio </main>)
    }else{
        return (<div>
            <div className={classes.chatHeader}>
                Are you connected with: <strong>{chat.users.filter(usr => usr !== user)}</strong>
            </div>
            <main className={classes.content} id="chatview-container">
                {
                    chat.messages.map((msg, index)=>{
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