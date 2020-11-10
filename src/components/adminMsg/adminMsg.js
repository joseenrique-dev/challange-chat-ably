import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styles from './styles';

class AdminMsgComponent extends React.Component {

  
  render() {
    
    const { classes } = this.props;
    
      return(
        <div>
          {
            this.props.location === 'admin' ?
          (  <div className={classes.chatHeaderAdmin}>
              {("Administration Panel").toUpperCase()}
            </div>) : null
          }
          <div className={classes.root}>
            <List>
            <ListItem>
              <ListItemText primary="General Notifications" />
            </ListItem>
              <Divider></Divider>
              <ListItemText primary="The Chat will be down one hours, sorry ." secondary="Jan 7, 2014" />
            </List>
          </div>
        </div>
      );
  }
  
}

export default withStyles(styles)(AdminMsgComponent);