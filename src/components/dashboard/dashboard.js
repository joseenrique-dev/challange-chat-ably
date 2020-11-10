import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import styles from './styles';

//Components
import ChatListComponent from '../chatList/chatList';
import chatMock from "../../mocks/chat.json";
import ChatViewComponent from "../chatview/chatview";
import ChatTextBoxComponent from "../chattextbox/chattextbox";
import AdminMsgComponent from "../adminMsg/adminMsg";

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

  signOut = ()=>{
    //TODO:SignOutFncHere...
  }


  submitMessageFn = ( msg ) =>{
    console.log('MSG from chattextbox', msg)
    //TODO: Send Message here !!!! :)    
  }

  render() {
    const { classes } = this.props;
    const location = this.props.match.path.split('/')[1]
   
      return(
        <div>
              <AdminMsgComponent location={location}/>
              <ChatListComponent 
                history={this.props.history} 
                newChatBtnFn={this.newChatBtnClicked}
                selectChatFn={this.selectChat} 
                chats={this.state.chats} 
                userEmail={this.state.email} 
                selectedChatIndex={this.state.selectedChat} />
            
              {
                location ===  'admin' ?
                  null :
                  <ChatViewComponent
                    user={this.state.email}
                    chat={this.state.chats[this.state.selectedChat]}
                  />
              }
              {
                <ChatTextBoxComponent submitMessageFn={this.submitMessageFn}/>
              }
              <Button className={classes.signOutBtn} onClick={this.signOut}>Sign Out</Button>
        </div>
      );
    
  }
}

export default withStyles(styles)(DashboardComponent);