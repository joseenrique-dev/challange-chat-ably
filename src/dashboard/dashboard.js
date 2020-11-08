import React from 'react';

import ChatListComponent from '../chatList/chatList';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import chatMock from "../mocks/chat.json"
import ChatViewComponent from "../chatview/chatview"
// I need to investigate why sometimes
// two messages will send instead of just
// one. I dont know if there are two instances
// of the chat box component or what...

// I will be using both .then and async/await
// in this tutorial to give a feel of both.

class DashboardComponent extends React.Component {

  
  constructor() {
    super();
    //Change setter of values here...
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      chats: [],
      email: null
    };
  }

  componentWillMount(){
    this.setState({
      chats: chatMock[0].chats,
      email: chatMock[0].email
    })
    
    
  }

  selectChat =( chatIndex ) => {
    this.setState({ selectedChat: chatIndex})
  }
  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });
//   newChatBtnClicked = () => {
// debugger
//     this.setState({ newChatFormVisible: true, selectedChat: null })
//     console.log("STATE", this.state)
//   };
  signOut = ()=>{
    //TODO:SignOutFncHere...
  }
  render() {
    const { classes } = this.props;
    console.log("CHECK this.state.newChatFormVisible", this.state.newChatFormVisible)
      return(
        <div>
              <ChatListComponent 
                history={this.props.history} 
                newChatBtnFn={this.newChatBtnClicked}
                selectChatFn={this.selectChat} 
                chats={this.state.chats} 
                userEmail={this.state.email} 
                selectedChatIndex={this.state.selectedChat} />
            
              {
                this.state.newChatFormVisible ?
                  null :
                  <ChatViewComponent
                    user={this.state.email}
                    chat={this.state.chats[this.state.selectedChat]}
                  />
              }
              <Button className={classes.signOutBtn} onClick={this.signOut}>Sign Out</Button>
        </div>
      );
    
  }
}

export default withStyles(styles)(DashboardComponent);