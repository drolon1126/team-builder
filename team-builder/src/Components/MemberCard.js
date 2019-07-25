import React from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function MemberCard(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h1>Name: {props.member.name}</h1>
        <h3>Email: {props.member.email}</h3>
        <h3>Role: {props.member.role}</h3>
      </div>
      <Fab color="primary" size='small' aria-label="Edit" className={classes.fab} onClick={() => props.setMemberToEdit(props.member)}>
        <EditIcon />
      </Fab>
      <Fab color="secondary" size='small' aria-label="Delete" className={classes.fab} onClick={() => props.removeMember(props.index)}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}