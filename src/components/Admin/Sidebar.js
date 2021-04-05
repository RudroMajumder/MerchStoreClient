
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {FaPlus} from "react-icons/fa";
import {FaThLarge} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import { withRouter } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#CAEBF2"
  },  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Sidebar = (props) =>{
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Manage Products",
      icon: <FaThLarge />,
      onClick: () => history.push("/manageProducts")
    },
    {
      text: "Add products",
      icon: <FaPlus />,
      onClick: () => history.push("/addProducts")
    },
    {
      text: "Edit Products",
      icon: <FaPencilAlt />,
      onClick: () => history.push("/editProducts")
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper}}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        {itemsList.map((item, index) => {
    const { text, icon, onClick } = item;
    return (
      <ListItem button key={text} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItem>
    );
  })} 
      </Drawer>
    </div>
  );
}

export default withRouter(Sidebar);