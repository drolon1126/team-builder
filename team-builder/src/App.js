import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import MemberCard from './Components/MemberCard';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  formWrap:{
    paddingLeft:'10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'cadetblue'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperEdit: {
    width: drawerWidth,
    backgroundColor:'skyblue'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const [isEditing,setIsEditing] = useState(false);

  function removeMember(mem){;
    team.splice(mem,1);
    setTeam([...team]);
  }

  function editMember(editedMember) {
    const tmpTeam = team.map(member => {
      if (member === memberToEdit) {
        return (editedMember);
      } else {
        return member;
      }
    })
    setTeam(tmpTeam);
  }

  return (
    <Container maxWidth="false" className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Team Member Cards
          </Typography>
        </Toolbar>
      </AppBar>>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: isEditing ? classes.drawerPaperEdit : classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <div className={classes.formWrap}>
          <Form setTeam={setTeam} team={team} memberToEdit={memberToEdit} editMember={editMember} isEditing={isEditing} setIsEditing={setIsEditing}/>
        </div>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          {team.map((member,i) => {
            return (
              <Grid item xs>
                <Paper className={classes.paper}><MemberCard index={i} member={member} setMemberToEdit={setMemberToEdit} removeMember={removeMember}/></Paper>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </Container>
  );
}

export default App;
