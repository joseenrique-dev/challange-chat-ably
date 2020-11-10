const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    right: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black',
    float: 'right',
    position: 'inherit',
    marginTop: '5%',
    marginRight: '2%'
  },
  listItem: {
    cursor: 'pointer'
  },
  newChatBtn: {
    borderRadius: '0px'
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  },
  chatHeaderAdmin: {
    width: 'calc(100% - 150px)',
    height: '50px',
    background: 'linear-gradient(180deg,#6fef6be6,#4c86af)',
    position: 'fixed',
    marginLeft: '301px',
    fontSize: '18px',
    textAlign: 'center',
    color: 'white',
    paddingTop: '10px',
    boxSizing: 'border-box'
  }
});

export default styles;