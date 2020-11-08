import React from 'react';

import ChatListComponent from '../chatList/chatList';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import chatMock from "../mocks/chat.json"

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

  selectChat =(chatIndex) => {
    console.log('Select a chat', chatIndex)
  }

  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

  render() {

    const { classes } = this.props;

      return(
        <div>
              <ChatListComponent 
                history={this.props.history} 
                newChatBtnFn={this.newChatBtnClicked}
                selectChatFn={this.selectChat} 
                chats={this.state.chats} 
                userEmail={this.state.email} 
                selectedChatIndex={this.state.selectedChat}>
            </ChatListComponent>  
        </div>
      );
    
  }
}

export default withStyles(styles)(DashboardComponent);